










AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['pt_BR'] = 'portugu�s (Brasil)';
			direction['pt_BR'] = 'ltr';

		

			available['en_US'] = 'ingl�s (Estados Unidos)';
			direction['en_US'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);