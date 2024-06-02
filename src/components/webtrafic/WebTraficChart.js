import React, { useEffect } from 'react'
import * as echarts from "echarts"
function WebTraficChart() {
    useEffect(()=>{
        echarts.init(document.querySelector("#trafficChart")).setOption({
            tooltip:{
                trigger: 'item',
            },
            legend:{
                top: '5%',
                left:'center',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label:{
                        show: false,
                        postion: 'center',
                    },
                   
                    emphasis: {
                        label:{
                            show: true,
                            fontSize: '18',
                            fontWeight:'bold',

                        },
                    },
                    
                    labelline:{
                        show: false,
                    },
                    data: [
                        {
                            value: 1048,
                            name: "Search Engine",
                        },
                        {
                            value: 735,
                            name: "Direct",
                        },
                        {
                            value: 580,
                            name: 'Email',
                        },
                        {
                            value: 484,
                            name: 'Union Ads',
                        },
                        {
                            value: 380,
                            name: 'Video Ads',
                        },
                    ]
                }
            ]
        })
    })
  return (
    <div id='trafficChart'
    style={{minHeight: '400px'}}
    className='echart'>
      
    </div>
  )
}

export default WebTraficChart
