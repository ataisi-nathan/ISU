import '../styles/home.css'
import Committee from '../components/committee';

function Home() {
    return (
        <main>
            <div className="landing">
                <div className="landing-content">
                    <h2>ISIODUM <br /> STUDENT UNION</h2>
                    <p>A student union that provides collective representation, resources, and community support, fostering collaboration and helping students achieve academic, social, and personal success on campus.</p>
                </div>
            </div>
            <Committee />
            
        </main>
    )
}
export default Home;