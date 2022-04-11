import './App.css'
import Contact from './components/Contact'
import Jokes from './components/Jokes'
function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
            <Jokes setup="I got my daughter a fridge for her birthday"
            punchline="I can't wait to see her face light up when she opens it"/>
            <Jokes setup="Why don't pirates travel on mountain roads?"
            punchline="Scurvy."/>
            <Jokes setup="Why do bees stay in the hive in the winter?"
            punchline="Swarm."/>
            <Jokes setup="What's the best thing about Switzerland?"
            punchline="I don't know, but the flag is a big plus!"/>
        </div>
    )
}

export default App;
