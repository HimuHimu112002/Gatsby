import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
    const [timeDay, settimeDay] = useState('00')
    const [timeHour, settimeHour] = useState('00')
    const [timeMinute, settimeMinute] = useState('00')
    const [timeSec, settimeSec] = useState('00')

    let interval = useRef()

    const startTimer = ()=>{
        const countdownDate = new Date('May 30, 2023 00:00:00').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minute = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const sec = Math.floor((distance % (1000 * 60)) / 1000)

            if(distance < 0){
                clearInterval(interval.current);
            }else{
                settimeDay(days)
                settimeHour(hour)
                settimeMinute(minute)
                settimeSec(sec)
            }

        }, 1000)

    }

    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current);
        }
    })
    //let a = Date()
  return (
    <Container>
        <Row className='py-4'>
            <Col>
                <img className='img-fluid' src='image/BANNER.png'>

                    
                </img>

                {/* <p>{timeDay}</p>
                <p>{timeHour}</p>
                <p>{timeMinute}</p>
                <p>{timeSec}</p> */}
            </Col>
        </Row>
    </Container>
  )
}

export default Banner