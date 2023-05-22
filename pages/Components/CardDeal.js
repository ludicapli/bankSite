import React from 'react'
import { card } from "../../public/assets"
import styles, {layout} from '../../lib/styles/styles'
import Button from "./Button"
import Image from 'next/image'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at set integer faucibus. Aliquet qui aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
        </p>
        <Button styles='mt-10'/>
      </div>
      
      <div className={layout.sectionImg}>
        <Image src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>

    </section>
)


export default CardDeal