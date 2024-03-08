import React, { useEffect, useState } from 'react';

type TimeUntilMKProps = {
  title: string;
  timeUntil: string;
  background?: string;
};
type DurationReturnType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const TimeUntilMK = ({ timeUntil, title, background = 'bg-yellow-300' }: TimeUntilMKProps) => {
  const [timeNow, setTimeNow] = useState(new Date());

  // jei skaiciuojam skirtuma tarp 2 datu
  // pasiversti abi data i ms ir atimti is vieno kita

  const durationToTime = (timeString: string): DurationReturnType => {
    const untilDate = new Date(timeString);
    const skirtumasMs = untilDate.getTime() - timeNow.getTime();

    const msInADay = 1000 * 60 * 60 * 24;

    const daysFull = skirtumasMs / msInADay; // 5.5
    const days = Math.floor(skirtumasMs / msInADay); // 5

    const valanduLiekana = daysFull - days; // 0.55
    const hoursFull = valanduLiekana * 24; // 6,5
    const hours = Math.floor(hoursFull); // 6

    const minuciuLiekana = hoursFull - hours; // 0.55
    const minutesFull = minuciuLiekana * 60; // 33.54
    const minutes = Math.floor(minutesFull); // 33

    const secLiekana = minutesFull - minutes; // .54
    const secFull = secLiekana * 60; // 34.545
    const sec = Math.floor(secFull); // 34

    return {
      days,
      hours,
      minutes,
      seconds: sec,
    };
  };
  const rez = durationToTime(timeUntil);

  // console.log('rez ===', rez);

  const hours = rez.hours;
  const minutes = rez.minutes;
  const seconds = rez.seconds;

  const tick = () => {
    setTimeNow(new Date());
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      // kodas kuris vyk sunaikinat komoonenta
      clearInterval(myInterval);
    };
  }, []);

  // console.log('timeNow ===', timeNow);

  return (
    <div className={`${background}  flex flex-col sm:flex-row justify-between items-center mb-4`}>
      <div className='mb-4 p-6 '>
        <h3 className='mr-2 mb-4'>{title} </h3>
        <div className='flex items-center gap-2'>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-gray-100  text-3xl p-4' id='days'>
              {rez.days.toString().padStart(2, '0')}
            </span>{' '}
            <p className=' mt-4 text-sm text-center'>Days</p>
          </div>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-gray-100  text-3xl p-4' id='hours'>
              {hours.toString().padStart(2, '0')}
            </span>{' '}
            <p className=' mt-4 text-sm text-center'>Hours</p>
          </div>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-gray-100  text-3xl p-4' id='minutes'>
              {minutes.toString().padStart(2, '0')}
            </span>{' '}
            <p className=' mt-4 text-sm text-center'>Minutes</p>
          </div>
          <div className='mr-2 mb-6 mt-4'>
            <span className='font-bold bg-gray-100  text-3xl p-4' id='seconds'>
              {seconds.toString().padStart(2, '0')}
            </span>{' '}
            <p className=' mt-4 text-sm text-center'>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeUntilMK;
