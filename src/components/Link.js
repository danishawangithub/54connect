import React from 'react';
import { useContext } from 'react';
import useNavigation from '../hooks/use-navigation';


function Link({to, children,className}){

	const { navigate } = useNavigation();

 

	const handleClick = (event) => {
		 
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
 		navigate(to);
	}

	return <a  className={className} href={to} onClick={handleClick}>{children}</a>
}

export default Link;