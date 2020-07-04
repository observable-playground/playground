import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Sidebar } from '../shared/Sidebar/Sidebar';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Logo } from '../shared/Logo/Logo';
import style from './Layout.module.scss'

export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuVisible: false
        };

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
    }

    hideMobileMenu(){
        if (!this.state.mobileMenuVisible) {
            return;
        }

        this.setState({
            mobileMenuVisible: false
        });
    }

    toggleMobileMenu(){
        this.setState({
            mobileMenuVisible: !this.state.mobileMenuVisible
        })
    }

    // isLinkHeaderActive({ isCurrent }) {
    //     return isCurrent
    //         ? { className: "App__logo active" }
    //         : { className: "App__logo" }
    //         ;
    // }

    render(){
        const children = this.props.children;

        return (
                <div className={style.App}>
                    <div className={style.App__MobileHeader}>
                        <button
                            className={ style.App__MobileMenuSwitch + (this.state.mobileMenuVisible ? ' active' : '') }
                            onClick={ this.toggleMobileMenu }
                        ><FontAwesomeIcon icon={faBars} /></button>

                        <span
                            onClick={this.hideMobileMenu}
                        ><Logo /></span>

                        <span className={ style.header_spring }></span>

                        <a
                            target="_blank"
                            className={style.App__twitter_link}
                            title="Follow me on twitter"
                            href="https://twitter.com/kddsky"
                        ><FontAwesomeIcon icon={faTwitter} 
                            style={ { width: '1em' } }
                        /></a>

                        <a
                            target="_blank"
                            className={style.App__github_link}
                            title="Star the project"
                            href="https://github.com/observable-playground/observable-playground"
                        ><FontAwesomeIcon icon={faStar}
                            style={ { width: '1em' } }
                        /></a>

                        <a
                            target="_blank"
                            className={style.App__github_link}
                            title="See the source code on GitHub"
                            href="https://github.com/observable-playground/observable-playground/issues"
                        ><FontAwesomeIcon icon={faGithub}
                            style={ { width: '1em' } }
                        /></a>
                    </div>

                    <div className={style.App__body}>
                        <div className={ style.App__contents + ' ' + (this.state.mobileMenuVisible ? style.hidden : '')  }>
                            {
                                children
                            }
                        </div>

                        <div
                            className={style.App__menu + ' ' + (this.state.mobileMenuVisible ? style.visible: '')}
                            onClick={this.hideMobileMenu}
                        ><Sidebar /></div>
                    </div>
                </div>
        );
    }
}