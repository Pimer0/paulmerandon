import { BlogPosts } from "app/components/posts";
import { jetBrainsMono } from "../app/fonts";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Bonjour, vous êtes chez Paul Mérandon
			</h1>
			<p className={`mb-4 ${jetBrainsMono.className}`}>
				{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque, veritatis culpa porro itaque eius quod quas deleniti vitae accusamus sapiente est, excepturi animi, tempore eos. Aut ad cumque sequi!`}
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
