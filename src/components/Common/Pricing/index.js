import React from 'react';

import i18next from "i18next";

import Resellers from "./resellers";
import Shopify from "./shopify";

const Pricing = () => {
	const {language} = i18next;

  const useShopify = language !== 'ru';

	return useShopify ? <Shopify /> : <Resellers />
}

export default Pricing;
