
import{ Box, Button, Container, Grid, Rating, TableFooter, Typography} from '@mui/material'
import image from './image/background.png'
import "./App.css";
import Currency from './components/Currency';
import image1 from './image/Star(5).png';

function App() {
 

  return (

    <section  >
      <div>
      </div>
      <div className="box" style={{backgroundImage: `url(${image})`}}>
        <h3>PayUnit Currency Converter</h3>
        <p>Welcome to the world's most popular money tool.</p>
      </div>
      <div className="empty"></div>
       
       <Container sx={{
        backgroundColor: "white",
        width:"65rem",
        textAlign: "center",
        color: "#222",
        borderRadius: 2,
        padding:"1rem 0rem",
        boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1); ",
        position: "absolute",
        top: "25%",
        left: "15%"
      }}>
       {/* <Typography varient='h5' sx={{marginBottom:"2rem"}}>Stay ahead with accurate conversion</Typography> */}
        <Grid container spacing={2}>
          < Currency/>
        
        </Grid>


       </Container>

       <section2 className="tablefooter">
          <Typography>Recommended by over 40,000 verified customers</Typography>
        <div className="boxfooter">
<div className="box1">
          <Box sx={{
            width:"10px",
            display: "flex",
            justifyContent:"center",
            // backgroundColor: "skyblue",
            height: "100px",
           
          }}>

          <Box sx={{width: "300px", display: "flex", flexDirection: "column"}}>
            <Typography>'Great'</Typography>
          <Rating/>
          <Typography sx={{fontSize:"10px"}}>Based on 68,513 reviews</Typography>
          <div>
            <img src={image1} alt="pic" />
            <ayopograpy>Trustpilot</ayopograpy>
          </div>

          </Box>
          </Box> 
          </div>

<div className="box2">

          <Box sx={{
            width:"10px",
            display: "flex",
            justifyContent:"center",
            // backgroundColor: "white",
            height: "",
            paddingleft:"50px"
          }}>

          <Box sx={{width: "150px",height:"20px", display: "flex", flexDirection: "column"}}>
          <Rating/>
            <Typography sx={{fontSize:"12px"}}>I'd like to have a french communication</Typography>
            <Typography sx={{fontSize:"8px"}}>I'd like to have a french communication</Typography>
            <div>
              <p style={{fontSize: "8px"}}>Johanne Frechette</p>
              <h6 style={{fontSize:"10px"}}>22 hours 57 minutes ago</h6>
            </div>

          </Box>
          </Box> 
          </div>

<div className="box4">

          <Box sx={{
            width:"150px",
            display: "flex",
            justifyContent:"center",
            backgroundColor: "skyblue",
            height: "auto",
          }}>

          <Box sx={{width: "300px", display: "flex", paddingLeft: "80px",flexDirection: "column"}}>
          <Rating/>
            <Typography sx={{fontSize:"10px"}}>Good one more time</Typography>
            <Typography sx={{fontSize:"7px"}}>Good one more time</Typography>
            <div>
              <p style={{fontSize: "8px"}}>FREDERIC COULLON</p>
              <h6 style={{fontSize:"9px"}}>22 hours 57 minutes ago</h6>
            </div>

          </Box>
          </Box> 
          </div>
        </div>
      </section2>


      
    </section>
  )
}

export default App



