import { Link } from "react-router-dom";
import { EXPLORE_IMAGE_URL } from "../constants/imageUrls";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../state/atoms/CategoryState";
import { subCategoryState } from "../state/atoms/SubCategoryState";

export function ExplorePage() {
	const setCategory = useSetRecoilState(categoryState);
	const setSubCategory = useSetRecoilState(subCategoryState);

	function handleClick(cat, sub) {
		setCategory(cat);
		setSubCategory(sub);
	}

	return (
		<main>
			<section className="flex flex-col justify-center my-12 px-60">
				<div className="relative self-center">
					<img className="-z-10" src={EXPLORE_IMAGE_URL} alt="explore" />
					<div className="text-4xl absolute top-96 left-56 [&>a]:bg-white [&>a]:p-4 space-x-96">
						<Link
							to="/shop"
							className="hover:bg-darkCyan transition-colors hover:text-white"
							onClick={() => {
								handleClick(2, "");
							}}
						>
							Women
						</Link>
						<Link
							to="/shop"
							className="hover:bg-darkCyan transition-colors hover:text-white"
							onClick={() => {
								handleClick(1, "");
							}}
						>
							Men
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
