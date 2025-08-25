import { useState, useCallback } from "react";


type UseColorResult = {
	color: string;
	getNewColor: () => void;
}


function useColor(): UseColorResult {
	const colors = ["#E4004B", "#FF9F00", "#B9375D", "#8ABB6C", "#5EABD6",];
	const [color, setColor] = useState(() => {
		return colors[Math.floor(Math.random() * colors.length)];
	});

	const getNewColor = useCallback(() => {
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setColor(randomColor);
	}, []);

	return { color, getNewColor };
}

export default useColor;
