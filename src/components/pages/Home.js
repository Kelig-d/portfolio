import React from 'react'
import Particles from 'react-particles-js'
import ParticlesConfig from '../../assets/config/particle-config'
import Navigation from '../Navigation'
import ProfileCard from '../ProfileCard'

export default function Home() {
    return (
        <div className="bg-black">
            <Particles className="h-screen w-full bg-blue-800 bg-opacity-60" params={ParticlesConfig} />
            <ProfileCard />
            <Navigation />
        </div>
    )
}
