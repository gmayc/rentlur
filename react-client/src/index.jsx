import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import List from './components/List.jsx';
import SavedRentals from './components/SavedRentals.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Details from './components/Details.jsx';
import Navigation from './components/Navigation.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userId: 0,
      rentals: [],
      savedRentals:[],
      details: [],
      cities: ['auburn','bham','dothan','shoals','gadsden','huntsville','mobile','montgomery','tuscaloosa','anchorage','fairbanks','kenai','juneau','flagstaff','mohave','phoenix','prescott','showlow','sierravista','tucson','yuma','fayar','fortsmith','jonesboro','littlerock','texarkana','bakersfield','chico','fresno','goldcountry','hanford','humboldt','imperial','inlandempire','losangeles','mendocino','merced','modesto','monterey','orangecounty','palmsprings','redding','sacramento','sandiego','sfbay','slo','santabarbara','santamaria','siskiyou','stockton','susanville','ventura','visalia','yubasutter','boulder','cosprings','denver','eastco','fortcollins','rockies','pueblo','westslope','newlondon','hartford','newhaven','nwct','delaware','washingtondc','miami','daytona','keys','fortlauderdale','fortmyers','gainesville','cfl','jacksonville','lakeland','miami','lakecity','ocala','okaloosa','orlando','panamacity','pensacola','sarasota','miami','spacecoast','staugustine','tallahassee','tampa','treasure','miami','albanyga','athensga','atlanta','augusta','brunswick','columbusga','macon','nwga','savannah','statesboro','valdosta','honolulu','boise','eastidaho','lewiston','twinfalls','bn','chambana','chicago','decatur','lasalle','mattoon','peoria','rockford','carbondale','springfieldil','quincy','bloomington','evansville','fortwayne','indianapolis','kokomo','tippecanoe','muncie','richmondin','southbend','terrehaute','ames','cedarrapids','desmoines','dubuque','fortdodge','iowacity','masoncity','quadcities','siouxcity','ottumwa','waterloo','lawrence','ksu','nwks','salina','seks','swks','topeka','wichita','bgky','eastky','lexington','louisville','owensboro','westky','batonrouge','cenla','houma','lafayette','lakecharles','monroe','neworleans','shreveport','maine','annapolis','baltimore','easternshore','frederick','smd','westmd','boston','capecod','southcoast','westernmass','worcester','annarbor','battlecreek','centralmich','detroit','flint','grandrapids','holland','jxn','kalamazoo','lansing','monroemi','muskegon','nmi','porthuron','saginaw','swmi','thumb','up','bemidji','brainerd','duluth','mankato','minneapolis','rmn','marshall','stcloud','gulfport','hattiesburg','jackson','meridian','northmiss','natchez','columbiamo','joplin','kansascity','kirksville','loz','semo','springfield','stjoseph','stlouis','billings','bozeman','butte','greatfalls','helena','kalispell','missoula','montana','grandisland','lincoln','northplatte','omaha','scottsbluff','elko','lasvegas','reno','nh','cnj','jerseyshore','newjersey','southjersey','albuquerque','clovis','farmington','lascruces','roswell','santafe','albany','binghamton','buffalo','catskills','chautauqua','elmira','fingerlakes','glensfalls','hudsonvalley','ithaca','longisland','newyork','oneonta','plattsburgh','potsdam','rochester','syracuse','twintiers','utica','watertown','asheville','boone','charlotte','eastnc','fayetteville','greensboro','hickory','onslow','outerbanks','raleigh','wilmington','winstonsalem','bismarck','fargo','grandforks','nd','akroncanton','ashtabula','athensohio','chillicothe','cincinnati','cleveland','columbus','dayton','limaohio','mansfield','sandusky','toledo','tuscarawas','youngstown','zanesville','lawton','enid','oklahomacity','stillwater','tulsa','bend','corvallis','eastoregon','eugene','klamath','medford','oregoncoast','portland','roseburg','salem','altoona','chambersburg','erie','harrisburg','lancaster','allentown','meadville','philadelphia','pittsburgh','poconos','reading','scranton','pennstate','williamsport','york','providence','charleston','columbia','florencesc','greenville','hiltonhead','myrtlebeach','nesd','csd','rapidcity','siouxfalls','sd','chattanooga','clarksville','cookeville','jacksontn','knoxville','memphis','nashville','tricities','abilene','amarillo','austin','beaumont','brownsville','collegestation','corpuschristi','dallas','nacogdoches','delrio','elpaso','galveston','houston','killeen','laredo','lubbock','mcallen','odessa','sanangelo','sanantonio','sanmarcos','bigbend','texoma','easttexas','victoriatx','waco','wichitafalls','logan','ogden','provo','saltlakecity','stgeorge','burlington','charlottesville','danville','fredericksburg','norfolk','harrisonburg','lynchburg','blacksburg','richmond','roanoke','swva','winchester','bellingham','kpr','moseslake','olympic','pullman','seattle','skagit','spokane','wenatchee','yakima','charlestonwv','martinsburg','huntington','morgantown','wheeling','parkersburg','swv','wv','appleton','eauclaire','greenbay','janesville','racine','lacrosse','madison','milwaukee','northernwi','sheboygan','wausau','wyoming','micronesia','puertorico','virgin','brussels','bulgaria','zagreb','copenhagen','bordeaux','rennes','grenoble','lille','loire','lyon','marseilles','montpellier','cotedazur','rouen','paris','strasbourg','toulouse','budapest','reykjavik','dublin','luxembourg','amsterdam','oslo','bucharest','moscow','stpetersburg','ukraine','bangladesh','micronesia','jakarta','tehran','baghdad','haifa','jerusalem','telaviv','ramallah','kuwait','beirut','malaysia','pakistan','dubai','vietnam','auckland','christchurch','wellington','buenosaires','lapaz','belohorizonte','brasilia','curitiba','fortaleza','portoalegre','recife','rio','salvador','saopaulo','caribbean','santiago','colombia','costarica','santodomingo','quito','elsalvador','guatemala','managua','panama','lima','puertorico','montevideo','caracas','virgin','cairo','addisababa','accra','kenya','casablanca','tunis'],

    };
    this.searchProperties = this.searchProperties.bind(this);
    this.retrieveDetails = this.retrieveDetails.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.retrieveFavorites = this.retrieveFavorites.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }
 

  componentDidMount() {
    this.setState({
      username: sessionStorage.getItem('username') || '',
      userId: sessionStorage.getItem('userId') || 0
    });
    this.retrieveFavorites();
  }


// search api for properties
  searchProperties(searchQuery) {
    axios.post('/api/search', {city: searchQuery}).then((response) => {
      this.setState({ rentals: response.data });
    });
  }

// get details on click (listitem component)
  retrieveDetails(listing){
    this.setState({
      details: listing
    });
    axios.post('/api/search/details',{listing})
    .then(details => {
      const combined = Object.assign(details.data, listing);
      this.setState({details: combined});
    });
  }


// login function, updating session
  login(usr, pss) {
    axios.post('/api/login', {username: usr, password: pss})
    .then ((response)=> {
      this.setState({
        username: response.data.data.username,
        userId: response.data.data.id
      })
      alert('Logged In Successfully!');
      sessionStorage.setItem('username', response.data.data.username);
      sessionStorage.setItem('userId', response.data.data.id);
    })
    .catch((err) => alert('Incorrect username or password'));
  }

// logout function, resetting state and clearing session
  logout() {
    this.setState({
      username: '',
      userId: 0
    });
    sessionStorage.clear();
  }


// add fav (list item comp)
  addFavorite(property, user_id = sessionStorage.getItem('userId')) {
    axios.post(`api/properties/${user_id}`, property)
    .then(result => console.log(result));
  }

// delete fav (SavedRentalItem comp)
  deleteFavorite(property_id, user_id = sessionStorage.getItem('userId')) {
    axios.delete(`api/properties/${user_id}/${property_id}`)
    .then(result => this.retrieveFavorites(user_id));
  }

  // retrieve saved favs, on comopnent did mount
  retrieveFavorites(user_id = sessionStorage.getItem('userId')) {
    axios.get(`api/properties/${user_id}`)
    .then(result => {
      this.setState({savedRentals: result.data.property});
    });
  }

// router
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation search={this.searchProperties} username={this.state.username} logout={this.logout}/>
          <div className='main'> 
            <Switch>
              <Route exact path='/' 
                render={(props) => <List {...props} 
                retrieve={this.retrieveDetails} 
                details={this.state.details} 
                rentals={this.state.rentals} 
                fav={this.addFavorite} 
                username={this.state.username}/>
              }/>
              <Route path='/saved-rentals' 
                render={(props) => <SavedRentals {...props} 
                saved={this.state.savedRentals} 
                favs={this.retrieveFavorites} 
                details={this.retrieveDetails} 
                delete={this.deleteFavorite}/>
                }/>
              <Route 
                path='/login' 
                render={(props) => <Login {...props} 
                login={this.login} />}
              />
              <Route 
                path='/signup' 
                component={Signup}
                />
              <Route   
                path='/details'
                render={(props) => <Details {...props} 
                details={this.state.details} />}
              />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
