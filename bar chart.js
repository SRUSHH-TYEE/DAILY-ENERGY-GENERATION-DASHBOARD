

       var myArea = d3.select("#bar")
                        .append("svg")
                        .attr("width","auto")
                        .attr("height",500);
        var data1= [27.193,15.55,19.33,12.71,21.42];               

        function showLabel(){
            var Region=["Northern","wastern","Southern","Eastern","Northeastern"];
            myArea.selectAll(".RegionLabel")
                .data(Region)
                .enter()
                .append("text")
                     .text(function(data){return data;})
                     .classed("RegionLable",true)
                     .attr("x",10)
                     .attr("y",function(d,i){
                         return(i+1)*50+20;
                     });
        
        }

        function show(dataser,col){
            
            console.log(dataser);
            var bar = myArea.selectAll('rect').data(dataser);
            var bartext = myArea.selectAll('text').data(dataser);
            showLabel();
            bar.enter()
                .append('rect')
                .attr("x",50)
                .attr("y",function(d,i){
                    return (i+1)*50;
                  })
                .attr("height",30)
                .transition()
                .duration(3000)
                .attr("width",function(d){
                    console.log(d);
                    return d*10;

                })  
                .style("fill",col)
                ;
                bartext.enter()
                       .append('text')
                       .attr("x",function(d){
                           return 50+d*10-20;
                       })
                       .attr("y",function(d,i){
                           return (i+1)*50+20;
                       })
                       .text(function(d){return d;})
                       .attr("class","texted");
                    }

              
        window.onload=show(data1,"teal");

 