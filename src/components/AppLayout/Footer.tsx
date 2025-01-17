// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import Link from 'next/link';
import styled from 'styled-components';
import PaLogo from './PaLogo';
import RedirectIcon from '~assets/icons/redirect-icon.svg';
import { Divider, Space } from 'antd';
import TwitterIcon from '~assets/icons/twitter-pink-bg.svg';
import DiscordIcon from '~assets/icons/discord-icon.svg';
import TelegramIcon from '~assets/icons/telegram-icon.svg';
import InternetIcon from '~assets/icons/internet-icon.svg';
import TwitterIconSm from '~assets/icons/twitter-icon-sm.svg';
import DiscordIconSm from '~assets/icons/discord-icon-sm.svg';
import TelegramIconSm from '~assets/icons/telegram-icon-sm.svg';
import InternetIconSm from '~assets/icons/internet-icon-sm.svg';
import AiBot from '../AiBot/AiBot';
import { useState } from 'react';

const Footer = ({ className }: { className?: string }) => {
	const [isAIChatBotOpen, setIsAIChatBotOpen] = useState(false);
	const [floatButtonOpen, setFloatButtonOpen] = useState(false);

	return (
		<footer
			aria-label='Site Footer'
			className={`${className} bg-white max-[650px]:rounded-[14px] `}
		>
			<div className='mx-auto max-w-screen-xl px-4 pt-8  sm:px-6 lg:pl-8 lg:pr-2'>
				<div className='flex flex-col md:flex-row '>
					{/* Logo and Network Link */}
					<div>
						<div className='flex justify-center sm:justify-start'>
							<Link
								className='flex'
								href='/'
							>
								<PaLogo className='h-auto w-[180px]' />
							</Link>
						</div>

						<div className='mt-3 flex justify-center max-[650px]:hidden md:inline-block'>
							<Space
								size={19}
								className='items-center '
							>
								<a
									href={'https://twitter.com/polk_gov'}
									target='_blank'
									rel='noreferrer'
								>
									<TwitterIcon className='text-sm text-lightBlue md:mr-1 md:text-lg' />
								</a>

								<a
									href={'https://discord.com/invite/CYmYWHgPha'}
									target='_blank'
									rel='noreferrer'
								>
									<DiscordIcon className='text-sm text-lightBlue md:mr-1 md:text-lg' />
								</a>

								<a
									href={'https://t.me/+6WQDzi6RuIw3YzY1'}
									target='_blank'
									rel='noreferrer'
								>
									<TelegramIcon className='text-sm text-lightBlue md:mr-1 md:text-lg' />
								</a>

								<a
									href={'https://polkassembly.io/'}
									target='_blank'
									rel='noreferrer'
								>
									<InternetIcon className='text-sm text-lightBlue md:mr-1 md:text-lg' />
								</a>
							</Space>
						</div>
					</div>

					{/* Terms Links */}
					<div className='mx-auto mt-8 flex flex-col justify-center md:mx-0 md:ml-auto md:mt-0 md:flex-row md:justify-end'>
						<div className='text-center sm:text-left md:ml-10 lg:ml-14'>
							<p className='mb-[-5px] text-lg font-bold text-bodyBlue max-[650px]:mt-[-15px] '>Help Center</p>

							<nav
								aria-label='Footer About Nav'
								className='mt-4 md:mt-3'
							>
								<div className='space-y-2 text-sm font-normal text-lightBlue'>
									<div>
										<a
											href='https://polkassembly.hellonext.co/'
											target='_blank'
											rel='noreferrer'
										>
											Report an Issue
											<RedirectIcon className='ml-3' />
										</a>
									</div>
									<div className='max-[650px]:mb-[-5px]'>
										<a
											href='https://feedback.polkassembly.io'
											target='_blank'
											rel='noreferrer'
										>
											Feedback
											<RedirectIcon className='ml-3' />
										</a>
									</div>
									<div className='max-[650px]:hidden'>
										<Link href='/terms-and-conditions'>Terms and Conditions</Link>
									</div>
									<div>
										<a
											href='https://github.com/polkassembly/polkassembly'
											target='_blank'
											rel='noreferrer'
										>
											Github
											<RedirectIcon className='ml-3' />
										</a>
									</div>
								</div>
							</nav>
						</div>

						<div className='mt-8 text-center font-normal text-lightBlue sm:text-left md:ml-10 md:mt-0 lg:ml-14'>
							<p className='mb-[-5px] text-lg font-bold text-bodyBlue max-[650px]:mt-[-15px] '>Our Services</p>

							<nav
								aria-label='Footer Services Nav'
								className='mt-4 md:mt-3'
							>
								<div className='space-y-2 text-sm'>
									<div>
										<a
											href='https://docs.polkassembly.io/'
											target='_blank'
											rel='noreferrer'
										>
											Docs
										</a>
										<RedirectIcon className='ml-3' />
									</div>

									<div className='max-[650px]:hidden'>
										<Link href={'/terms-of-website'}>Terms of Website</Link>
									</div>

									<div className='max-[650px]:hidden'>
										<Link href={'/privacy'}>Privacy Policy</Link>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>

				{/* Below divider */}
				<Divider className='mb-0' />
				<div className='mt-5 pb-3 text-sm font-medium text-lightBlue'>
					<div className='text-center sm:flex sm:justify-between sm:text-left'>
						<div className='flex max-[650px]:flex-col'>
							<p className=' mr-1 max-[650px]:mb-0 '>A House of Commons Initiative.</p>
							<p className='mt-4  sm:mt-0 '>Polka Labs Private Limited {new Date().getFullYear()}</p>
						</div>

						<p className='mb-0'>
							<span className='block sm:inline'>All rights reserved.</span>
						</p>
					</div>
				</div>
				<div className='md:hidden'>
					<div className='mt-1 flex justify-center'>
						<Space
							size={19}
							className='items-center '
						>
							<a
								href={'https://twitter.com/polk_gov'}
								target='_blank'
								rel='noreferrer'
							>
								<TwitterIconSm className='text-sm text-lightBlue md:mr-1 md:text-lg' />
							</a>

							<a
								href={'https://discord.com/invite/CYmYWHgPha'}
								target='_blank'
								rel='noreferrer'
							>
								<DiscordIconSm className='text-sm text-lightBlue md:mr-1 md:text-lg' />
							</a>

							<a
								href={'https://t.me/+6WQDzi6RuIw3YzY1'}
								target='_blank'
								rel='noreferrer'
							>
								<TelegramIconSm className='text-sm text-lightBlue md:mr-1 md:text-lg' />
							</a>

							<a
								href={'https://polkassembly.io/'}
								target='_blank'
								rel='noreferrer'
							>
								<InternetIconSm className='text-sm text-lightBlue md:mr-1 md:text-lg' />
							</a>
						</Space>
					</div>

					<div className='mt-2 flex flex-col justify-center text-[10px] font-normal leading-[15px] text-[#96A4B6]'>
						<div className='flex justify-center'>
							<Link href='/terms-and-conditions'>Terms and Conditions</Link>
							<Link
								href={'/terms-of-website'}
								className='ml-2'
							>
								Terms of Website
							</Link>
						</div>
						<Link
							href={'/privacy'}
							className='mx-auto mt-2'
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
			<AiBot
				isAIChatBotOpen={isAIChatBotOpen}
				setIsAIChatBotOpen={setIsAIChatBotOpen}
				floatButtonOpen={floatButtonOpen}
				setFloatButtonOpen={setFloatButtonOpen}
			/>
		</footer>
	);
};

export default styled(Footer)`
	.anticon:hover {
		outline: pink_primary 2px solid;
		path {
			fill: pink_primary !important;
		}
	}
`;
