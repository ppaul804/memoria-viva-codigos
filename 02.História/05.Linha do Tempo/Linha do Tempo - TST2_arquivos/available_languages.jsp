










AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['pt_BR'] = 'português (Brasil)';
			direction['pt_BR'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);