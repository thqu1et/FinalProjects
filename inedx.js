
var  nav = document.getElementById('nav');
      
      window.onscroll = function(){

    var $cont = document.querySelector('.cont');
var $elArr = [].slice.call(document.querySelector('.el'));
var $closeBtnArr = [].slice.call(document.querySelector('.el__close-btn'));


      	if (window.pageYOffset >100) {

      		nav.style.background = " #333";
      		
      	}
      	else{
      		nav.style.background = "transparent";
      		nav.style.boxShadow = "none";
      	}
      }
      var counter = 1;
      function plusSlides(n) {
        showSlides(counter += n);
      }
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
if(counter > 4){
    counter = 1;
}}, 6000);

function initMap() {
    var options = {
    center: { lat: 43.238949, lng: 76.849709},
    zoom: 11
  };
  var map = new google.maps.Map(document.getElementById("map"),options);
  
  var icon = {
    url: "https://www.netclipart.com/pp/m/118-1186803_clipart-restaurant-black-and-white-19-almoo-icon.png",
    scaledSize: new google.maps.Size(20,20),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  };
  var market = new google.maps.Marker({
    position: {lat: 43.1936260265564, lng: 76.88670696672008},
    map: map,
    icon: icon,
    title: "Helldo!"
  });
    market.addListener('click', function(){
      infowindow2.open(map,market);
      });
  
  var icoon = {
    url: "https://www.netclipart.com/pp/m/118-1186803_clipart-restaurant-black-and-white-19-almoo-icon.png",
    scaledSize: new google.maps.Size(20,20),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  };
  var maret = new google.maps.Marker({
    position: {lat: 43.26348704904255, lng: 76.95473006857006},
    map: map,
    icon: icoon,
    title: "Hello!"
  });
    maret.addListener('click', function(){
      infowindow2.open(map,maret);
  });
  var icoonn = {
    url: "https://www.netclipart.com/pp/m/118-1186803_clipart-restaurant-black-and-white-19-almoo-icon.png",
    scaledSize: new google.maps.Size(20,20),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  };
  var marret = new google.maps.Marker({
    position: {lat: 43.23398101202616, lng: 76.77737202623976},
    map: map,
    icon: icoonn,
    title: "Hello!"
  });
    marret.addListener('click', function(){
      infowindow2.open(map,marret);
  });
  var circle = new google.maps.Circle({
    map: map,
    center:new google.maps.LatLng(43.1936260265564, 76.88670696672008),
    radius:500,
    strokeColor:"grey",
    fillColor:"black"
    });
   
     var circle = new google.maps.Circle({
    map: map,
    center:new google.maps.LatLng(43.26348704904255, 76.95473006857006),
    radius:500,
    strokeColor:"grey",
    fillColor:"black"
    });
   
    var circle = new google.maps.Circle({
       map: map,
       center:new google.maps.LatLng( 43.23398101202616,76.77737202623976),
       radius:500,
       strokeColor:"grey",
       fillColor:"black"
       });
}
