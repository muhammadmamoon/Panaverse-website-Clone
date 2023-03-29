import CoreTracks from "@/components/widget/coreTracks"
import Hero from "@/components/widget/Hero"
import Outcomeprogram from "@/components/widget/outcomeprogram"
import SpecialTrack from "@/components/widget/specialTrack"

export default function Home() {
  return (
    <>
    <main>
      {/* hero section */}
      <Hero/>
      {/*core Tract section*/}
      <CoreTracks/>
      {/* special Track */}
      <SpecialTrack/>
      {/* outcome Program */}
      <Outcomeprogram/>
    </main>
    </>
  )
}