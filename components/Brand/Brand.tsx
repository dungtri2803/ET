import React from 'react';
import Image from 'next/Image';
import styles from '../../styles/Brand.module.scss'
import Sleek from '../../public/images/sleek.png'
import Nero from '../../public/images/nero.png'
import Winemart from '../../public/images/winemart.png'
import Eoty from '../../public/images/eoty.png'
import Artisan from '../../public/images/artisan.png'
import Hollow from '../../public/images/hollow.png'
import ProudCloud from '../../public/images/proudcloud.png'
import Brand1 from '../../public/images/br1.png'
import Brand2 from '../../public/images/br2.png'

function Brand(){
    return (
        <section id='#Brand' className={styles.BrandSection}>
            <div className={styles.Brand}>
                <div className={styles.BrandList}>
                    <div className={styles.BrandItem}>
                        <Image src={Sleek} alt="" />
                    </div>
                    <div className={styles.BrandItem}> 
                        <Image src={Nero} alt="" />
                    </div>
                    <div className={styles.BrandItem}>
                        <Image src={Winemart} alt="" />
                    </div>
                    <div className={styles.BrandItem}>
                        <Image src={Eoty} alt="" />
                    </div>
                    <div className={styles.BrandItem}>
                        <Image src={Artisan} alt="" />
                    </div>
                    <div className={styles.BrandItem}>
                        <Image src={Hollow} alt="" />
                    </div>
                    <div className={styles.BrandItem}>
                        <Image src={ProudCloud} alt="" />
                    </div>
                    <div className={styles.BrandItem}>
                        <Image src={Brand1} alt="" />
                    </div>
                    <div className={styles.BrandItem}>
                        <Image src={Brand2} alt="" />
                    </div>
                </div>
               
            </div>

        </section>
    )
}

export default Brand;