import Cards from './Cards';
import classes from './StudentClassroom.module.css'

const Home = () => {

    return (
      <div>
      <div className={classes["main-name"]}>
      <p>Hello, Saquib!</p>
      </div>
        <div className={classes["home"]} >
        <Cards color="#3E497A" tchrName="Sheldon" subject="DBMS"/>
        <Cards color="#B8405E" tchrName="Leonard" subject="OS Lab"/>
        <Cards color="#219F94" tchrName="Penny" subject="DSA"/>
        <Cards color="#86C6F4" tchrName="Ammy" subject="Linux Lab"/>
        <Cards color="#1572A1" tchrName="Raj" subject="Computer"/>
        <Cards color="#781C68" tchrName="Howard" subject="System Software"/>
        <Cards color="#570530" tchrName="Bernadette" subject="DBMS Lab"/>
        <Cards color="#B8405E" tchrName="Stuart" subject="Compiler Design"/>
        </div>
        </div>
      );

}


export default Home;
