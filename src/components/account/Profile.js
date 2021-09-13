import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from './profile.module.css';
import Aos from "aos";
import 'aos/dist/aos.css';
const picture = {
    width: '100%'
}
const blocks = {
    margin: '24px 0'
}

const loading = {
    margin: 'auto 0'
}

const Profile = () => {



    useEffect(() => {
        Aos.init({ duration: 2000 });
    })

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return (<div className={loading}>Loading..</div>)

    return (isAuthenticated && (
        <div className={style.container}>
            <div className={style.card}>
                <img src={user.picture} alt="John" style={picture} />
                <h1>{user.name}</h1>
                <p className={style.title}>CEO & Founder, Example</p>
                <p>{user.email}</p>
                <div style={blocks}>
                    <a href="profile"><i className="fa fa-dribbble"></i></a>
                    <a href="profile"><i className="fa fa-twitter"></i></a>
                    <a href="profile"><i className="fa fa-linkedin"></i></a>
                    <a href="profile"><i className="fa fa-facebook"></i></a>
                </div>
                <p><button className={style.contact}>Contact</button></p>
            </div>

            <div className={style.imageBlock}>

                <div className={style.boxes}>

                </div>
                <div data-aos='fade-up' className={style.boxes}>
                    Hello World
                </div>
                <div data-aos='fade-right' className={style.boxes}>
                    Hello World
                </div>
                <div data-aos-offset='500' data-aos='fade-left' className={style.boxes}>
                    Hello World 1
                </div>
                <div data-aos='fade-left' className={style.boxes}>
                    Hello World
                </div>
                <div data-aos='fade-left' className={style.boxes}>
                    Hello World
                </div>
                <div data-aos='fade-up' className={style.boxes}>
                    Hello World
                </div>
                <div data-aos='fade-up' className={style.boxes}>
                    Hello World
                </div>
                <div data-aos='fade-up' className={style.boxes}>
                    Hello World
                </div>
                <div data-aos='fade-up' className={style.boxes}>
                    Hello World
                </div>
            </div>

        </div>


    )
    )
}

export default Profile