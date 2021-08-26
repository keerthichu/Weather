const request = require('request')
const url='http://api.weatherstack.com/current?access_key=15c2322abb02a122bc61e63073772f31&query=New%20York'
request({url: url, json : true},(error,response)=>{
    console.log(response.body.current.weather_descriptions + '. It is currently '+ response.body.current.temperature + ' degrees out. There is ' + response.body.current.precip + ' % possibility to train.')
    //console.log(response.body.current)
    // const data=JSON.parse(response.body)
    // console.log(data.current)
    //console.log(response)
})
// console.log('Starting')

// setTimeout(() => {
//     console.log('2 sec time')
// },2000)

// setTimeout(() => {
//     console.log('0 sec time')
// },0)

// console.log('Stopping')

