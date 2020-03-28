export const sobelImage=(imageData,newData,multiplier,threshold)=>{

    let data=imageData.data
    let newdata=newData.data
    let rowWidth=imageData.width*4;
    let sum=0;
    let sum1=0;
    let sum2=0;

    let tracking=false;
    
    for (let y=0; y<imageData.height;y++){
        for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=4){
            const p1=data[x-rowWidth-4]
            const p2=data[x-rowWidth]
            const p3=data[x-rowWidth+4]
            const p4=data[x-4]
        //  const p5=data[x+0];
            const p6=data[x+4]
            const p7=data[x+rowWidth-4]
            const p8=data[x+rowWidth]
            const p9=data[x+rowWidth+4]
        
            sum1=(p1)+(2*p2)+(p3)-(p7)-(2*p8)-(p9)
            sum2=(-p1)+(p3)-(2*p4)+(2*p6)-(p7)+(p9)
        
            sum=Math.floor(Math.sqrt((sum1*sum1)+(sum2*sum2)))
            sum=Math.floor(sum*multiplier)
        
            if(sum>255) sum=255
            if(sum>1)tracking=true
            if(tracking===true&&sum>threshold)sum=sum*1;else {sum=0; tracking=false}
            if(sum>255) sum=255
            
            newdata[x+0]=sum
            newdata[x+1]=sum
            newdata[x+2]=sum
            newdata[x+3]=255
        }
    }
    
}


export const laplaceImage=(imageData,newData,multiplier,threshold)=>{
   
    let data=imageData.data
    let newdata=newData.data
    let rowWidth=imageData.width*4
    let sum=0
    
    for (let y=0; y<imageData.height;y++){
        for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=4){
            const p1=data[x-rowWidth-4]
            const p2=data[x-rowWidth]
            const p3=data[x-rowWidth+4]
            const p4=data[x-4]
            const p5=data[x+0]
            const p6=data[x+4]
            const p7=data[x+rowWidth-4]
            const p8=data[x+rowWidth]
            const p9=data[x+rowWidth+4]
        
            sum=-(p1)-(p2)-(p3)-(p4)+(8*p5)-(p6)-(p7)-(p8)-(p9)    
            
            sum=Math.floor(sum*multiplier)
        
            if(sum>255) sum=255
            if(sum<threshold)sum=0
            if(sum>255) sum=255
            
            newdata[x+0]=sum
            newdata[x+1]=sum
            newdata[x+2]=sum
            newdata[x+3]=255
        }
    }
}

export const prewittImage=(imageData,newData,multiplier,threshold)=>{
   
    let data=imageData.data
    let newdata=newData.data
    let rowWidth=imageData.width*4
    let sum=0
    let sum1=0
    let sum2=0
    let sum3=0
    let tracking=false
        
    for (let y=0; y<imageData.height;y++){
        for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=4){
            const p1=data[x-rowWidth-4]
            const p2=data[x-rowWidth]
            const p3=data[x-rowWidth+4]
            const p4=data[x-4]
//          const p5=data[x+0];
            const p6=data[x+4]
            const p7=data[x+rowWidth-4]
            const p8=data[x+rowWidth]
            const p9=data[x+rowWidth+4]

            sum1=(p1)+(p2)+(p3)-(p7)-(p8)-(p9)
            sum2=(p1)+(p2)-(p4)+(p6)-(p7)-(p8)
            sum3=-(p1)+(p3)-(p4)+(p9)-(p7)+(p9)
            sum=sum1;
            if(sum2>sum)sum=sum2
            if(sum3>sum)sum=sum3
        
            sum=Math.floor(sum*multiplier)
        
            if(sum>255) sum=255
            if(sum>1)tracking=true
            if(tracking===true&&sum>threshold)sum=sum*1;else {sum=0; tracking=false}
            if(sum>255) sum=255
            
            newdata[x+0]=sum
            newdata[x+1]=sum
            newdata[x+2]=sum
            newdata[x+3]=255
        }
    }        
}

export const robinsonImage=(imgData,newData,multiplier,threshold)=>{

    let data=imgData.data
    let newdata=newData.data
    let rowWidth=imgData.width*4
    let sum=0
    let sum1=0
    let sum2=0
    let sum3=0
    let tracking=false
    
    for (let y=0; y<imgData.height;y++){
        for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=4){
            const p1=data[x-rowWidth-4]
            const p2=data[x-rowWidth]
            const p3=data[x-rowWidth+4]
            const p4=data[x-4]
            const p5=data[x+0]
            const p6=data[x+4]
            const p7=data[x+rowWidth-4]
            const p8=data[x+rowWidth]
            const p9=data[x+rowWidth+4]

            sum1=(p1)+(p2)+(p3)+(p4)-(2*p5)+(p6)-(p7)-(p8)-(p9)
            sum2=(p1)+(p2)+(p3)-(p4)-(2*p5)+(p6)-(p7)-(p8)+(p9)
            sum3=(-1*p1)+(p2)+(p3)-(p4)-(2*p5)+(p6)-(p7)+(p8)+(p9)

            sum=sum1;
            if(sum2>sum)sum=sum2
            if(sum3>sum)sum=sum3
        
            sum=Math.floor(sum*multiplier)
        
            if(sum>255) sum=255
            if(sum>1)tracking=true
            if(tracking===true&&sum>threshold)sum=sum*1;else {sum=0; tracking=false}
            if(sum>255) sum=255
            
            newdata[x+0]=sum
            newdata[x+1]=sum
            newdata[x+2]=sum
            newdata[x+3]=255
        }
    }
}        

export const kirschImage=(imgData,newData,multiplier,threshold)=>{

    let data=imgData.data
    let newdata=newData.data
    let rowWidth=imgData.width*4
    let sum=0
    let sum1=0
    let sum2=0
    let sum3=0
    let tracking=false
    
    for (let y=0; y<imgData.height;y++){
        for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=4){
            const p1=data[x-rowWidth-4]
            const p2=data[x-rowWidth]
            const p3=data[x-rowWidth+4]
    //      const p4=data[x-4]
            const p5=data[x+0]
            const p6=data[x+4]
            const p7=data[x+rowWidth-4]
            const p8=data[x+rowWidth]
            const p9=data[x+rowWidth+4]

            sum1=(3*p1)+(3*p2)+(3*p3)+(3*p3)-(0*p5)+(3*p6)-(5*p7)-(5*p8)-(5*p9)
            sum2=(3*p1)+(3*p2)+(3*p3)-(5*p3)-(0*p5)+(3*p6)-(5*p7)-(5*p8)+(3*p9)
            sum3=(-5*p1)+(3*p2)+(3*p3)-(5*p3)-(0*p5)+(3*p6)-(5*p7)+(3*p8)+(3*p9)

            sum=sum1
            if(sum2>sum)sum=sum2
            if(sum3>sum)sum=sum3
        
            sum=Math.floor(sum*multiplier)
        
            if(sum>255) sum=255
            if(sum>1)tracking=true
            if(tracking===true&&sum>threshold)sum=sum*1;else {sum=0; tracking=false}
            if(sum>255) sum=255
            
            newdata[x+0]=sum
            newdata[x+1]=sum
            newdata[x+2]=sum
            newdata[x+3]=255
        }
    }
}


export const robertsCrossImage=(imgData,newData,multiplier,threshold)=>{

    let data=imgData.data
    let newdata=newData.data
    let rowWidth=imgData.width*4
    let sum=0
    let sum1=0
    let sum2=0
    let tracking=false
    
    for (let y=0; y<imgData.height;y++){
        for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=4){
            const p1=data[x-rowWidth-4]
            const p2=data[x-rowWidth]
            const p4=data[x-4]
            const p5=data[x+0]
        
            sum1=(p1)-(p5)
            sum2=(p2)-(p4)
        
            sum=Math.floor(Math.sqrt((sum1*sum1)+(sum2*sum2)))
            sum=Math.floor(sum*multiplier)
        
            if(sum>255) sum=255
            if(sum>1)tracking=true
            if(tracking===true&&sum>threshold)sum=sum*1;else {sum=0; tracking=false}
            if(sum>255) sum=255
            
            newdata[x+0]=sum
            newdata[x+1]=sum
            newdata[x+2]=sum
            newdata[x+3]=255
        }
    }
}