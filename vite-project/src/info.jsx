import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './info.css'
export default function Info({ information }){
    let hot='https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg='
    let cold='https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    let rain='https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.jpg?s=612x612&w=is&k=20&c=Ni_pn0WY_talPR-bNOF_JSTTLvLDFsBqf0ELWChZcAA='
    return(
        <div className="new">
            <h2>WeatherInfo-{information.Weather}</h2>
            <hr></hr>
           <div className='new2'> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={information.humidity>80?rain : information.temp>15?hot:cold}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {information.city}{""}{information.humidity>80?<ThunderstormIcon/> : information.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'span'}>
          <div>Temperature={information.temp}&deg;C</div>
          <div>Temp_max={information.tempmax}&deg;C</div>
          <div>Temp_min={information.tempmin}&deg;C</div>
          <div>Humidity={information.humidity}&deg;C</div>
          <div>The Weather can be description as <i>{information.Weather}</i> and feels like {information.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}