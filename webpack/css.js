module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include: paths,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'px-to-rem-loader',
							options: {
								dpr: 2,
								rem: 750,
								exclude: ['background-size']
							}
						}
					]
				}
			]
		}
	}
}