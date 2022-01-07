const cts = {
	WRAP_BNB_GAS: 50000,
	WRAP_BNB_GAS_PRICE: 10,
	UNWRAP_BNB_GAS: 50000,
	UNWRAP_BNB_GAS_PRICE: 10,
	FETCH_COINS_INTERVAL: 60 * 1000,
	FETCH_BALANCE_INTERVAL: 60 * 1000,
	MARKETPLACE_LOGIN_INTERVAL: 86400,
	MARKETPLACE_BUY_GAS: 300000,
	MARKETPLACE_MAX_GAS_PRICE: 65, //65 -> 0.02BNB //130 -> 0.04 BNB (20$ if BNB = 500$)
	MARKETPLACE_MIN_GAS_PRICE: 7,
	MARKETPLACE_SELL_FEE: 0.0415, //4.15%
	BATTLE_WIN_RATE: 0.4, // https://thetanarenatool.io/
	THETAN_RARITY_WIN_REWARDS_PER_BATTLE_THC: [9.25, 12.5, 29.55],
	MIN_THETAN_PRICE_WBNB: 0, // 0 WBNB
	MAX_THETAN_PRICE_WBNB: 0.2, // 0.2 WBNB
};

export { cts };
