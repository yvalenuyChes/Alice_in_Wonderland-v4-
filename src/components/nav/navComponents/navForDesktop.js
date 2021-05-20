/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal'
import MainPageLinks from './mainPageLinks'
import ModalBody from './navModalBody'
import classes from '../../../styles/navStyles/nav.module.scss'


function NavListDesktop() {

	const [mouseClickOnLink, isMouseClickOnLink] = useState(false)

	const popupOpen = useSelector(state => state.popupOpen)
	const dispatch = useDispatch()

	return (
		<div
			className={classes.navbar__list}
		>
			<div
				className={classes.navbar__item}
				onClick={() => isMouseClickOnLink(!mouseClickOnLink)}
				role="menuitem"
				tabIndex={0}
			>
				<span>Главная</span>
				{mouseClickOnLink
					? <MainPageLinks />
					: null
				}
			</div>
			<div
				className={classes.navbar__item}
			>
				<p
					onClick={() => dispatch({ type: 'OPEN_MODAL_WINDOW' })}
					id="auth"
				>Авторизация</p>
				<Modal
					open={popupOpen}
				>
					<ModalBody />
				</Modal>
			</div>
		</div>
	)
}
export default NavListDesktop