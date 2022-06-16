// background cover image element
const quotesList = [
	{
		quote: '오늘도 즐겁고 기대되는 하루가 시작되었다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 오늘도 내가 원하는 모든 선한 일을 이룰 것이다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 성장하고 있다.',
		tag: '#긍정문구'
	},
	{
		quote: '내 인생은 더 좋은 방향으로 흐르고 있다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 용기있다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 행복한 사람이다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 긍정의 왕이다.',
		tag: '#긍정문구'
	},
	{
		quote: '나에게는 모든 문제의 답을 찾을 수 있는 지혜가 있다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 내 꿈에 조금 더 가까이 다가가고 있다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 행동하는 자이다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 지금 내게 주어진 것만으로도 내 인생을 최고로 만들 수 있는 지혜가 있다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 내 인생을 즐기고 있다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 내가 원하는 것을 끌어당길 것이다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 나의 있는 그대로를 사랑한다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 나의 하루를 좋은 습관으로 채워간다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 내 꿈을 이루기 위해 충분한 자질을 갖추고 있고 충분히 똑똑하고 충분히 건강하고 충분히 용기있다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 나의 삶의 모든면에서 풍요롭고 여유롭다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 이 모든 것을 충분히 받을 만큼 가치 있는 사람이다.',
		tag: '#긍정문구'
	},
	{
		quote: '나는 지금 당장 엄청난 행운과 좋은 기회들을 받아들일 준비가 되어있다.',
		tag: '#긍정문구'
	},
	{
		quote: '그 곳을 빠져가는 가장 좋은 방법은 그 곳을 거쳐 가는 것이다.',
		tag: '#긍정문구 #로버트프로스트'
	},
	{
		quote: '"할 수 있다"고 말하다 보면, 결국 실천하게 된다. ',
		tag: '#긍정문구 #사이먼쿠퍼'
	},
	{
		quote: '훌륭한 판단은 경험에서 비롯되지만, 경험은 서투른 판단에서 비론된다. ',
		tag: '#긍정문구 #나폴레옹1세'
	},
	{
		quote: '항상 뒤를 돌아보다보면 앞에 놓인 것을 시야에서 놓친다.',
		tag: '#긍정문구 #저스틴심즈'
	},
	{
		quote: '사람은 행복하기로 마음먹은 만큼 행복하다.',
		tag: '#긍정문구 #에이브러험링컨'
	},
	{
		quote: '승자가 즐겨 쓰는 말은 "다시 한번 해보자"이고, 패자가 즐겨 쓰는 말은 "해봐야 별 수 없다"이다.',
		tag: '#긍정문구 #탈무드'
	},
	{
		quote: '어떤 일이 도저히 불가능하다고 스스로 믿고서 시작하는 것은, 그 일을 불가능하게 만드는 원인이다.',
		tag: '#긍정문구 #워너메이커'
	},
	{
		quote: '희망은 비용이 전혀 들지 않는다.',
		tag: '#긍정문구 #콜레트'
	},
];

const quote = document.querySelector('.quote-list .typo');
const tag = document.querySelector('.quote-list .tag');
const todaysIndex = Math.floor(Math.random() * (quotesList.length - 1));

quote.innerText = quotesList[todaysIndex].quote;
tag.innerText = quotesList[todaysIndex].tag;

// background cover image element
const background = document.querySelector('#background');
const todaysBg = document.createElement('img');
const bgIndex = String(todaysIndex).padStart(2,"0");
const darkBg = ['04', '06', '10', '12', '17', '18', '26', '27']
const main = document.querySelector('main');

background.className = `bg${bgIndex}`;
if(darkBg.indexOf(bgIndex) !== -1) main.classList.add('dark');
