/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



const githubInfo = {}
axios.get('https://api.github.com/users/niklasbec')
  .then(response => {
    console.log(response);
    githubInfo.image = response.data.avatar_url
    githubInfo.name = response.data.name
    githubInfo.userName = response.data.login
    githubInfo.location = response.data.location
    githubInfo.githubAdress = response.config.url
    githubInfo.followerCount = response.data.followers
    githubInfo.followingCount = response.data.following
    githubInfo.userBio = response.data.bio
    container.append(newCard(githubInfo))
  })
  .catch(error => {
    console.log(error);
  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const newCard = (objectInput) => {
  // Create elements
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const heading = document.createElement('h3')
  const paraOne = document.createElement('p')
  const paraTwo = document.createElement('p')
  const paraThree = document.createElement('p')
  const anchor = document.createElement('a')
  const paraFour = document.createElement('p')
  const paraFive = document.createElement('p')
  const paraSix = document.createElement('p')
  
  //textContent

  image.setAttribute('src', objectInput.image)
  heading.textContent = objectInput.name
  paraOne.textContent = objectInput.userName
  paraTwo.textContent = `Location: ${objectInput.location}`                   
  paraThree.textContent = `Profile: `
  anchor.setAttribute('href', objectInput.githubAdress)
  anchor.innerHTML = objectInput.githubAdress
  paraFour.textContent = `Followers: ${objectInput.followerCount}`
  paraFive.textContent = `Following: ${objectInput.followingCount}`
  paraSix.textContent = `Bio: ${objectInput.userBio}`



  // appending
  card.append(image)
  card.append(cardInfo)
  cardInfo.append(heading)
  cardInfo.append(paraOne)
  cardInfo.append(paraTwo)
  cardInfo.append(paraThree)
  cardInfo.append(paraFour)
  cardInfo.append(paraFive)
  cardInfo.append(paraSix)
  paraThree.append(anchor)

  //classes

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  heading.classList.add('name')
  paraOne.classList.add('username')



  return card
}

const container = document.querySelector('.container')

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/niklasbec/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [];

  axios.get('https://api.github.com/users/niklasbec/followers')
    .then(response => {
      console.log(response.data);
      response.data.forEach((item) => {
        followersArray.push(item.url)
      })
        followersArray.forEach((item) => {
          axios.get(`${item}`)
            .then(response => {
              githubInfo.image = response.data.avatar_url
              githubInfo.name = response.data.name
              githubInfo.userName = response.data.login
              githubInfo.location = response.data.location
              githubInfo.githubAdress = response.config.url
              githubInfo.followerCount = response.data.followers
              githubInfo.followingCount = response.data.following
              githubInfo.userBio = response.data.bio
              container.append(newCard(githubInfo))
            })
            .catch(error => {
              console.log(error);
            })
  })
      })
      .catch(error => {
        console.log(error);
      })
      
      
      

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
