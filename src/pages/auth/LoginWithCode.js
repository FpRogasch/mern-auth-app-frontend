// Hojas de estilo
import styles from "./auth.module.scss"

// Iconos de React
import { GrInsecure } from "react-icons/gr";

// Componentes
import Card from "../../components/card/Card";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginWithCode = () => {

    const [loginCode, setLoginCode] = useState("");

    // const handleInputChange = () => {

    // };

    const loginUser = () => {

    };

    return <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
                <div className="--flex-center">
                    <GrInsecure size={35} color="#999" />
                </div>
                <h2>Enter Access Code</h2>
                
                <form onSubmit={loginUser}>
                    <input type="text"
                        placeholder="Access Code"
                        required
                        name="loginCode"
                        value={loginCode}
                        onChange={(e) => setLoginCode(e.target.value)}
                    />
                    
                    <button typeof="submit" className="--btn --btn-primary --btn-block">
                        Procced to Login
                    </button>
                    <span className="--flex-center">Check your email for login access code</span>
                    <div className={styles.links}>
                    <p>
                        <Link to="/">- Home</Link>
                    </p>
                    <p className="v-link --color-primary">
                        <b>Resend Code</b>
                    </p>
                </div>
                </form>
            </div>
        </Card>
    </div>
}

export default LoginWithCode;