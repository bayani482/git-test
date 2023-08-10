import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

export const selecteFeaturePromotion = () => {
	return PROMOTIONS.find((promotion) => promotion.featured);
};
