export const grayScaleImage=(imageData)=>{
    
    const data=imageData.data
    for (let i=0;i<data.length;i+=4)
    {
    const brightness=.299*data[i]+.587*data[i+1]+.114*data[i+2];
    data[i]=brightness;
    data[i+1]=brightness;
    data[i+2]=brightness;
    data[i+3]=255;
    }
}

export const monoImageR=(imageData)=>{
    const data=imageData.data
    for (let i=0;i<data.length;i+=4){
      if(data[i+0]>=0){
       data[i+1]=data[i+0];
       data[i+2]=data[i+0];
      }
    }
    }

export const monoImageG=(imageData)=>{
    const data=imageData.data   
    for (let i=0;i<data.length;i+=4){
        if(data[i+1]>=0){
        data[i+0]=data[i+1];
        data[i+2]=data[i+1];
        }
    }
    }

export const monoImageB=(imageData)=>{
    const data=imageData.data
    for (let i=0;i<data.length;i+=4){
        if(data[i+2]>=0){
        data[i+1]=data[i+2];
        data[i+0]=data[i+2];
        }
    } 
    }

export const invertImage=(imageData)=>{
    const data=imageData.data
    for (let i=0;i<data.length;i+=4)
    {
  
   data[i+0]=255-data[i+0];
   data[i+1]=255-data[i+1];
   data[i+2]=255-data[i+2];

    }

}

export const gaussianSmooth=(imageData, newData)=>{ 

    let data=imageData.data;
    let newdata=newData.data;
    let rowWidth=imageData.width*4;
    let sum=0;
//x step increment is 1 to handle each color channel seaparately.    
    for (let y=0; y<imageData.height-2;y++){
    for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=1){

        const p1=data[x-rowWidth*2-8];
        const p2=data[x-rowWidth*2-4];
        const p3=data[x-rowWidth*2];
        const p4=data[x-rowWidth*2+4];
        const p5=data[x-rowWidth*2+8];
        const p6=data[x-rowWidth-8];
        const p7=data[x-rowWidth-4];
        const p8=data[x-rowWidth];
        const p9=data[x-rowWidth+4];
        const p10=data[x-rowWidth+8];
        const p11=data[x-8];
        const p12=data[x-4];
        const p13=data[x+0];
        const p14=data[x+4];
        const p15=data[x+8];
        const p16=data[x+rowWidth-8];
        const p17=data[x+rowWidth-4];
        const p18=data[x+rowWidth];
        const p19=data[x+rowWidth+4];
        const p20=data[x+rowWidth+8];        
        const p21=data[x+rowWidth*2-8];
        const p22=data[x+rowWidth*2-4];
        const p23=data[x+rowWidth*2];
        const p24=data[x+rowWidth*2+4];
        const p25=data[x+rowWidth*2+8];

  
        sum=(2*p1)+(4*p2)+(5*p3)+(4*p4)+(2*p5)+(4*p6)+(9*p7)+(12*p8)+(9*p9)+(4*p10)+(5*p11)+(12*p12)+(15*p13)+(12*p14)+(5*p15)+(4*p16)+(9*p17)+(12*p18)+(9*p19)+(4*p20)+(2*p21)+(4*p22)+(5*p23)+(4*p24)+(2*p25);
    
        sum=Math.floor(sum/159); //This used to be 115
    
        if(sum>255) sum=255;
        if(sum<0) sum=0;
     
     
        newdata[x+0]=sum;
        

     if(y===2){
        newdata[x+0-rowWidth]=sum;
        newdata[x+1-rowWidth]=sum;
        newdata[x+2-rowWidth]=sum;
        newdata[x+3-rowWidth]=255;
        newdata[x+0-rowWidth*2]=sum;
        newdata[x+1-rowWidth*2]=sum;
        newdata[x+2-rowWidth*2]=sum;
        newdata[x+3-rowWidth*2]=255;
        newdata[x+0-rowWidth-4]=sum;
        newdata[x+1-rowWidth-4]=sum;
        newdata[x+2-rowWidth-4]=sum;
        newdata[x+3-rowWidth-4]=255;
        newdata[x+0-rowWidth*2-4]=sum;
        newdata[x+1-rowWidth*2-4]=sum;
        newdata[x+2-rowWidth*2-4]=sum;
        newdata[x+3-rowWidth*2-4]=255;
        newdata[x+0-rowWidth-8]=sum;
        newdata[x+1-rowWidth-8]=sum;
        newdata[x+2-rowWidth-8]=sum;
        newdata[x+3-rowWidth-8]=255;
        newdata[x+0-rowWidth*2-8]=sum;
        newdata[x+1-rowWidth*2-8]=sum;
        newdata[x+2-rowWidth*2-8]=sum;
        newdata[x+3-rowWidth*2-8]=255;
        newdata[x+0-4]=sum;
        newdata[x+1-4]=sum;
        newdata[x+2-4]=sum;
        newdata[x+3-4]=255;
        newdata[x+0-8]=sum;
        newdata[x+1-8]=sum;
        newdata[x+2-8]=sum;
        newdata[x+3-8]=255;

     }

     if(y===imageData.height-3){
        newdata[x+0+rowWidth]=sum;
        newdata[x+1+rowWidth]=sum;
        newdata[x+2+rowWidth]=sum;
        newdata[x+3+rowWidth]=255;
        newdata[x+0+rowWidth*2]=sum;
        newdata[x+1+rowWidth*2]=sum;
        newdata[x+2+rowWidth*2]=sum;
        newdata[x+3+rowWidth*2]=255;
        newdata[x+0+rowWidth-4]=sum;
        newdata[x+1+rowWidth-4]=sum;
        newdata[x+2+rowWidth-4]=sum;
        newdata[x+3+rowWidth-4]=255;
        newdata[x+0+rowWidth*2-4]=sum;
        newdata[x+1+rowWidth*2-4]=sum;
        newdata[x+2+rowWidth*2-4]=sum;
        newdata[x+3+rowWidth*2-4]=255;
        newdata[x+0+rowWidth-8]=sum;
        newdata[x+1+rowWidth-8]=sum;
        newdata[x+2+rowWidth-8]=sum;
        newdata[x+3+rowWidth-8]=255;
        newdata[x+0+rowWidth*2-8]=sum;
        newdata[x+1+rowWidth*2-8]=sum;
        newdata[x+2+rowWidth*2-8]=sum;
        newdata[x+3+rowWidth*2-8]=255;
        newdata[x+0-4]=sum;
        newdata[x+1-4]=sum;
        newdata[x+2-4]=sum;
        newdata[x+3-4]=255;
        newdata[x+0-8]=sum;
        newdata[x+1-8]=sum;
        newdata[x+2-8]=sum;
        newdata[x+3-8]=255;
        

     }

    }

    
    }
    
    for (let y=imageData.height-4; y<imageData.height-1;y++){
        for (let x=y*rowWidth;x<y*rowWidth+rowWidth;x+=4){
            newdata[x+0+rowWidth]=newdata[x+0];
            newdata[x+1+rowWidth]=newdata[x+1];
            newdata[x+2+rowWidth]=newdata[x+2];
            newdata[x+3+rowWidth]=newdata[x+3];
        }
    
    }
}