import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import battery_bms from '../public/ebike/battery_bms.JPG';
import battery_complete from '../public/ebike/battery_complete.JPG';
import battery_charging from '../public/ebike/battery_charging.JPG';
import checking_voltage from '../public/ebike/checking_voltage.JPG';
import outdoors from '../public/ebike/outdoors.JPG';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>matas.wtf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="/"><h2>matas.wtf? an ebike?</h2></a>
      <p>I made an electric bike.</p>
      <p>a few years ago I made a gas-powered bike, but it was too loud (and I am too self-conscious) to use it frequently</p>
      <p>I like electronics, batteries, and bicycling, so I decided to make an ebike</p>
      <p>I had a spare bike. I purchased a 1200W motor from amazon. but pre-built e-bike batteries were took expensive, so I decided to build my own.</p>
      <p>I bought 52 high-amp rated 18650 batteries, a 40A BMS, and some other small pieces.</p>
      <p>following <a href="https://www.ebikeschool.com/how-to-build-a-diy-electric-bicycle-lithium-battery-from-18650-cells/">this guide</a>, I completed the battery with only a few unscheduled electrical discharges</p>
      <p>currently when riding, I wear a backpack with the battery inside. if the battery catches fire, it's easier to drop the backpack than dismount a bike when traveling at high speeds</p>
      <p>the top recorded speed is 63 km/h, the range is theoretically 48km at max power, but can likely go farther at lower speeds</p>
      <br></br>
      <Image src={battery_bms} width={400} height={400}></Image>
      <p>adding a bms</p>

      <Image src={battery_complete} width={400} height={400}></Image>
      <p>added positive and negative leads -- the battery is complete</p>

      <Image src={battery_charging} width={400} height={400}></Image>
      <p>time to charge it</p>

      <Image src={checking_voltage} width={400} height={400}></Image>
      <p>always check your voltage</p>

      <Image src={outdoors} width={400} height={400}></Image>
      <p>the bike is ready</p>


      <br></br>
      <p>cost breakdown</p>
      <table>
        <tr>
            <th>Item</th>
            <th>Cost</th>
            <th>Link</th>
        </tr>
        <tbody>
        <tr>
            <td>EBIKELING Waterproof Ebike Conversion Kit for Electric Bike 700C Front or Rear Wheel Electric Bicycle Hub Motor Kit</td>
            <td>389.99</td>
            <td>https://www.amazon.com/dp/B07MY91KHZ?th=1&psc=1</td>
        </tr>
        <tr>
            <td>MOLICEL/NPE INR-18650-P26A 35A 2600MAH FLAT TOP 18650 BATTERY</td>
            <td>204.6</td>
            <td>https://liionwholesale.com/products/molicel-npe-p26a-35a-2600mah-flat-top-18650-battery-authorized-distributor-inr-18650-p26a?variant=16132682154078</td>
        </tr>
        <tr>
            <td>ZONKIE Bike Chain Single-Speed, Bicycle Chain 1 Speed, 1/2 × 1/8 inch,116 Links</td>
            <td>13.88</td>
            <td>https://www.amazon.com/gp/product/B078HRX7QS/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1</td>
        </tr>
        <tr>
            <td>54.6V 4A Charger Electric Bike Charger 48V / Li-ion Battery Charger 48V Charger 48V Scooter/E-Bike/Boat/Motorcycle Battery Charger 48V for Ezgo Battery Charger (54.6V4A XLR)</td>
            <td>58</td>
            <td>https://www.amazon.com/gp/product/B07PN7LN92/ref=ppx_yo_dt_b_asin_title_o09_s01?ie=UTF8&psc=1</td>
        </tr>
        <tr>
            <td>SHONAN Pure Nickel Strips for High Capacity Battery Packs- 0.15x6mm(3.1 oz, 32 ft/roll) 99.6% Purity Nickel Strips for Battery Spot Welding</td>
            <td>12.99</td>
            <td>https://www.amazon.com/gp/product/B08RJ8C28J/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1</td>
        </tr>
        <tr>
            <td>BNTECHGO 10 Gauge Silicone Wire 5 ft red and 5 ft Black Flexible 10 AWG Stranded Copper Wire</td>
            <td>10.88</td>
            <td>https://www.amazon.com/gp/product/B017TGYW3S/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1</td>
        </tr>
        <tr>
            <td>10 Pair XT60 Connectors, XT-60 Male Female Bullet Connectors with Heat Shrink</td>
            <td>7.99</td>
            <td>https://www.amazon.com/gp/product/B07DVDKL42/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1</td>
        </tr>
        <tr>
            <td>DALY BMS 13S 48V 40A Li-ion Battery Protection Module PCB Protection Board with Balance Leads BMS for 18650 Battery Pack 48V</td>
            <td>30.47</td>
            <td>https://www.amazon.com/gp/product/B08SJPFWP8/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1</td>
        </tr>
        <tr>
            <td>Neutrik NC3FXX-BAG 3-Pin XLRF Cable Connector, Black Metal Housing with Silver Contacts</td>
            <td>7.95</td>
            <td>https://www.amazon.com/gp/product/B002EDVPU0/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1</td>
        </tr>
        <tr>
            <td>Sales Tax</td>
            <td>48.26</td>
            <td>https://www.irs.gov/</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
