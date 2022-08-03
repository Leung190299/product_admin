const Progress = ( { bgcolor, progress, height, width = '100%',style={} } ) => {

	const Parentdiv = {
		height: height,
		width: width,
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		transition: 'all 5s',
		...style

	};

	const Childdiv = {
		height: '100%',
		width: `${ progress }%`,
		backgroundColor: bgcolor,
		borderRadius: 40,
		textAlign: 'center',
		transition: 'all 5s'

	};

	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	};

	return (
		<div style={ Parentdiv }>
			<div style={ Childdiv }>
				<span style={ progresstext }>{ `${ progress }%` }</span>
			</div>
		</div>
	);
};

export default Progress;