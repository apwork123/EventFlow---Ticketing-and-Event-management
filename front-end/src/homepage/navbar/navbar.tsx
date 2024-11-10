import styles from './navbar.module.css';
import DropdownNav from '../Category_Dropdown/DropdownNav';
import Dropdown from '../../assets/Dropdown'


function Navbar() {
  return (
    <>
      <div style={{width: '100%',
      }}>
        <div className={styles.Navbar}>
         <Header />
         <Categories />
        </div>
      
     </div>
     <div >
      
      </div>
    </>
  );
}

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src='/Homepage_Images/logo.png' alt="Logo" />
        <h1>EventFlow</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}>
              <span>
              <Dropdown
                buttonText="Login"
                options={[
                 { label: 'Login', onClick: () => window.location.href = '/login' },
                 { label: 'Login (Organizer)', onClick: () => window.location.href = '/login' },
                 ]}
              />
      
              </span>
             </a>
          </li>
          <li><img src="" alt="User Icon" /></li>
        </ul>
      </nav>
    </header>
  );
}

function Categories() {
  const sportsCategories = [
    {
      name: 'Sports',
      subcategories: [
        {
          name: 'Sports',
          subcategories: [
            { name: 'Football', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Sports/Football.jpg' },
            { name: 'Cricket', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Sports/Cricket.png' },
            { name: 'Basketball', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Sports/Basketball.jpg' },
            { name: 'Tennis', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Sports/Tennis.jpg' },
          ],
        },
        {
          name: 'Motorsports',
          subcategories: [
            { name: 'Formula 1', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Motorsports/Formula 1.png' },
            { name: 'MotoGP', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Motorsports/MotoGP.png' },
            { name: 'Endurance', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Motorsports/Endurance.png' },
            { name: 'Rally', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/Motorsports/Rally.png' },
          ],
        },
        {
          name: 'eSports',
          subcategories: [
            { name: 'LoL', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/E-sports/LoL.jpg' },
            { name: 'CS2', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/E-sports/CS2.jpg' },
            { name: 'Valorant', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/E-sports/Valorant.jpg'  },
            { name: 'Dota 2', imageUrl: '../../../public/Homepage_Images/Category Images/Sports/E-sports/Dota2.png' },
          ],
        },
      ],
    },
  ];;

  const concertsCategories = [
    { name: 'Diljit Dosanjh' },
    { name: 'KRSNA', imageUrl: '../../../public/Homepage_Images/Category Images/Concerts/Kr$na.jpg' },
    { name: 'Hanumankind' },
    { name: 'Travis Scott' },
    // Add more concerts categories here
  ];

  const theaterCategories = [
    { name: 'Natak', subcategories: [
      { name: 'Marathi', options: [
        { name: 'Jar Tar Chi Gosth' },
        { name: 'Bambai Meri Jaan' },
        { name: 'Ayushyavar Bolu Kahi' },
        { name: 'Bhumika' },
        // Add more Marathi options here
      ]},
      { name: 'Gujarati', options: [
        { name: 'Munga Bole Behra Samdhe' },
        { name: 'Gujjubhai Bnaya Dabang' },
        { name: 'Bhago Dukh Aya' },
        { name: 'Naya Nukkad' },
        // Add more Gujarati options here
      ]},
      // Add more Natak subcategories here
    ]},
    // Add more theater categories here
  ];

  const realityShowsCategories = [
    
    { name: 'Award Shows', subcategories: [
      { name: 'Filmfare Awards', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Award Shows/Filmfare.jpg' },
      { name: 'ZEE Cine Awards', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Award Shows/ZeeCine.jpg' },
      { name: 'IIFA', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Award Shows/IIFA.jpg' },
      { name: 'Stardust Awards', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Award Shows/Stardust.jpg' },
      // Add more award shows here
    ]},
    { name: 'Talent Shows', subcategories: [
      { name: 'Comedian shows', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Talent Shows/Comedy.jpg' },
      { name: 'Dance India Dance', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Talent Shows/DanceIndiaDance.jpg' },
      { name: 'Dance +', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Talent Shows/Danceplus.jpg' },
      { name: 'Indian Idol', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Talent Shows/IndianIdol.jpg' },
      // Add more talent shows here
    ]},
    { name: 'Interviews', subcategories: [
      { name: 'Movie Release', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Interviews/MovieRelease.jpg' },
      { name: 'Trailer Launch', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Interviews/TrailerLaunch.jpg' },
      { name: 'Movie Promotion', imageUrl: '../../../public/Homepage_Images/Category Images/Reality Shows/Interviews/Promotion.jpg' },
      // Add more interviews here
    ]},
    // Add more reality shows categories here
  ];

  const festivalsCategories = [
    { name: 'Religious', subcategories: [
      { name: 'Navratri', imageUrl: '../../../public/Homepage_Images/Category Images/Festivals/Religious/Navaratri.jpg' },
      { name: 'Ganesh Chaturthi', imageUrl: '../../../public/Homepage_Images/Category Images/Festivals/Religious/Ganesh Chaturti.jpg' },
      { name: 'Ganesh Visarjan', imageUrl: '../../../public/Homepage_Images/Category Images/Festivals/Religious/Ganesh Visarjan.jpg' },
      { name: 'Christmas', imageUrl: '../../../public/Homepage_Images/Category Images/Festivals/Religious/Christmas.jpg' },
      // Add more religious festivals here
    ]},
    // Add more festivals categories here
  ];


  
  return (
    <div className={styles.categories}>
      {sportsCategories.map((category) => (
        <DropdownNav style={{ left: 0 }}
          key={category.name}
          label={category.name}
          categories={category.subcategories}
        />
      ))}
      <DropdownNav label="Concerts" style={{ left: 0 }} categories={concertsCategories} />
      <DropdownNav label="Theater" categories={theaterCategories} />
      <DropdownNav label="Reality Shows" style={{ right: 0 }} categories={realityShowsCategories} />
      <DropdownNav label="Festivals" style={{ right: 0 }} categories={festivalsCategories} />
    </div>
  );
}

 
export default Navbar;