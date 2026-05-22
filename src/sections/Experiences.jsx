import { Timeline } from "../components/Timeline";
import { experiences } from "../components/constants";

const Experiences = () => {
	return (
		<section id="experience" className="scroll-mt-24">
			<Timeline data={experiences} />
		</section>
	);
};

export default Experiences;
