/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector, useDispatch } from 'react-redux'
import Modal from '@material-ui/core/Modal'
import classNames from 'classnames'
import { MainPageTransitions, KanadaPageTransitions } from './navLinks'
import AccordionBlock from '../../accordion/accordion'
import ModalBody from './navModalBody'

export default function NavForPhonesBody() {

	const navOpen = useSelector(state => state.navOpen)
	const popupOpen = useSelector(state => state.popupOpen)
	const dispatch = useDispatch()

	const сlasses = classNames({
		nav_phones__body: true,
		active: navOpen
	})


	return (
		<div className={сlasses}>
			<div className="nav_phones__body-itemWrapper">
				<div className="nav_phones__body-item">
					<AccordionBlock
						title="Главная"
						content={<MainPageTransitions />}
					/>
				</div>
				<div className="nav_phones__body-item">
					<AccordionBlock
						title="Канада"
						content={<KanadaPageTransitions />}
					/>
				</div>
				<div>
					<div
						onClick={() => dispatch({ type: 'OPEN_MODAL_WINDOW' }, { type: 'NAV_OPEN' })}
						id="auth"
					>Авторизация</div>
					<Modal
						open={popupOpen}
					>
						<ModalBody />
					</Modal>
				</div>
			</div>
		</div >
	)
}