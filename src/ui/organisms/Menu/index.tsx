import React, { useState } from 'react';

import { Link } from 'ui/atoms';

import { Props } from './index.model';
import { Styled } from './index.styled';

const Menu: React.FunctionComponent<Props> = ({ withSpec = false, closeMenu }) => {
	const ControllerLink = (props) => <Styled.Link {...props} onClick={closeMenu} />;

	return (
		<>
			<Styled.Nav>
				<ControllerLink href='#roadmap'>Roadmap</ControllerLink>
				<ControllerLink href='#about'>About</ControllerLink>
				<ControllerLink href='#faq'>FAQ</ControllerLink>
				<ControllerLink href='#community'>Community</ControllerLink>
				<Link href='https://github.com/tagion' isExternal withIcon target='_blank'>
					GitHub
				</Link>
			</Styled.Nav>
			{withSpec && (
				<Styled.SpecContainer>
					<Link href='https://tagion.com/tagion-tech-paper.pdf' isExternal withIcon target='_blank'>
						TechPaper
					</Link>
				</Styled.SpecContainer>
			)}
		</>
	);
};

export { Menu };
