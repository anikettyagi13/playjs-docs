import { play } from '../../play.min'
export function TextCleaner(target, classed) {
  let elements = target.split('')
  let html = ''
  for (var element of elements) {
    if (element !== ' ')
      html += `<span style="display:inline-block" class="${classed}">${element}</span>`
  }
  return html
}
export function TextAnimations(target, delay = 0) {
  play({
    targets: target,
    translateY: [-200, 0],
    opacity: [0, 0.9],
    duration: 2000,
    delay,
    iteration: true,
    endDelay: 4000,
    late: 400,
  })
}
export function SVGAnimation() {
  play({
    targets: '#play_icon',
    translateX: [-200, 0],
    opacity: [0, 1],
    delay: 0,
    duration: 1000,
    endDelay: 5000,
    iteration: true,
  })
  play({
    targets: '#play_icon_path',
    d: 'M0 0L260 121.558L0 240L77 121.558L0 0Z',
    delay: 2000,
    duration: 3000,
    endDelay: 3000,
    whenVisible: false,
    iteration: true,
  })
  play({
    targets: '#play_icon',
    translateX: [0, 200],
    delay: 5000,
    duration: 1000,
    endDelay: 5000,
    iteration: true,
  })
  play({
    targets: '#play_icon',
    opacity: [1, 0],
    delay: 5000,
    duration: 1000,
    endDelay: 5000,
    animation: 'ease-out-circular',
    iteration: true,
  })
  play({
    targets: '#play_icon_path',
    d: 'M0 0L260 121.558L0 240L178 121.558L0 0Z',
    delay: 5000,
    duration: 500,
    endDelay: 5500,
    whenVisible: false,
    iteration: true,
  })
}

export function BorderAnimation() {
  play({
    targets: ['#section_play_js'],
    borderRadius: 40,
    duration: 6000,
    iteration: true,
  })
}

export function LoadingAnimation() {
  play({
    targets: '#loading_path_1',
    d: 'M414 187C414 290.277 321.323 374 207 374C92.6771 374 0 290.277 0 187C0 83.7228 92.6771 0 207 0C321.323 0 414 83.7228 414 187ZM85.2309 187C85.2309 247.754 139.749 297.004 207 297.004C274.251 297.004 328.769 247.754 328.769 187C328.769 126.246 274.251 76.996 207 76.996C139.749 76.996 85.2309 126.246 85.2309 187Z',
    whenVisible: false,
    direction: 'alternate',
    iteration: true,
  })
  play({
    targets: '#loading_path_2',
    d: 'M414 187C414 290.277 321.323 374 207 374C92.6771 374 0 290.277 0 187C0 83.7228 92.6771 0 207 0C321.323 0 414 83.7228 414 187ZM25.789 187C25.789 277.411 106.92 350.703 207 350.703C307.08 350.703 388.211 277.411 388.211 187C388.211 96.5895 307.08 23.2973 207 23.2973C106.92 23.2973 25.789 96.5895 25.789 187Z',
    whenVisible: false,
    direction: 'alternate',
    iteration: true,
  })
}
export function OnViewAnimation(target, threshold) {
  play({
    targets: target,
    translateY: [300, 0],
    duration: 1500,
    opacity: [0, 1],
    threshold: threshold,
    late: 0,
    whenVisible: true,
  })
}
export function AnimateBlock() {
  play({
    targets: '.block',
    translateX: [-150, 0],
    duration: 1000,
    endDelay: 3000,
    threshold: 1,
    iteration: true,
  })
  play({
    targets: '.block',
    borderRadius: 75,
    rotateZ: 500,
    scaleX: 1.5,
    scaleY: 1.5,
    backgroundColor: 'rgb(231,111,81)',
    duration: 1000,
    delay: 1000,
    animation: 'ease-linear',
    endDelay: 3000,
    threshold: 1,
    iteration: true,
  })
  play({
    targets: '.block',
    scaleX: [1.5, 1],
    scaleY: [1.5, 1],
    rotateZ: -500,
    backgroundColor: ['rgb(231,111,81)', 'rgb(236,206,131)'],
    duration: 1000,
    delay: 2000,
    animation: 'ease-linear',
    endDelay: 3000,
    threshold: 1,
    whenVisible: true,
    iteration: true,
  })
  play({
    targets: '.block',
    translateX: [0, 200],
    borderRadius: [75, 0],
    delay: 3000,
    duration: 1000,
    iteration: true,
    endDelay: 3000,
    threshold: 1,
  })
}

export function AnimateStar() {
  play({
    targets: '#star',
    d: 'M183 0L193.157 159.476L365.603 118.849L199.434 176.784L295.855 311.151L183 187.48L70.1452 311.151L166.566 176.784L0.397156 118.849L172.843 159.476L183 0Z',
    whenVisible: false,
    direction: 'alternate',
    animation: 'ease-linear',
    iteration: true,
  })
  play({
    targets: '.small_stars',
    d: 'M43 0L50.6706 34.825L85.7975 31.4397L55.4113 49.5775L69.4503 82.3103L43 58.695L16.5497 82.3103L30.5887 49.5775L0.202457 31.4397L35.3294 34.825L43 0Z',
    whenVisible: false,
    direction: 'alternate',
    late: 400,
    animation: 'ease-linear',
    iteration: true,
  })
}

export function MouseOver(target, translate = -10) {
  play({
    targets: `${target}`,
    translateY: translate,
  })
}
export function MouseLeave(target, translate = [-10, 0]) {
  play({
    targets: `${target}`,
    translateY: translate,
  })
}
