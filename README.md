# World News Aggregator

## Setup

```sh
$ yarn install (or npm install)
```

## Development

```sh
$ yarn start (or npm start)
# visit http://localhost:3000
```

- HTML 수정: `/public/index.html`를 수정하시면 됩니다.
- JS 수정: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업하시면 됩니다.
- CSS 수정: `/src` 디렉토리 내에서 자유롭게 파일/폴더를 생성/수정하여 작업하시면 됩니다.

## TODO

[Twitch API](https://dev.twitch.tv/docs/api/reference)를 이용하여 구현하세요.

- [ ] 첫 페이지의 상단 부분에는 Top Games 정보(게임 이름)을 순위에 따라 10개 보여주어야 합니다.
- [ ] 첫 페이지의 Top Games 목록 아래에는 가장 첫번째 Top Game의 비디오가 20개 보여야 합니다. 각 비디오는 아래의 정보를 반드시 보여주어야 합니다.
  - [ ] 만든 날짜
  - [ ] 비디오 길이
  - [ ] 비디오 언어
  - [ ] Thumbnail 이미지
  - [ ] 비디오 제목
  - [ ] 사용자 이름
  - [ ] 시청자 수
  - [ ] 공개 여부
- [ ] 사용자는 Top Games 중 원하는 게임을 선택할 수 있어야 합니다.
- [ ] 사용자가 Top Games 중 하나를 선택했을시, Top Games 목록 아래의 비디오 정보가 해당 게임에 대한 비디오 목록으로 반영되어야 합니다.
- [ ] 비디오 목록 아래에는 "Next"와 "Prev" 버튼이 있어야 하고 상식에 맞게 Pagination이 구현되어야 합니다.
- [ ] 사용자는 비디오를 선택할 수 있어야 합니다.
- [ ] 사용자가 선택한 비디오의 정보를 Modal에서 보여주어야 합니다. 비디오 정보는 위에 나열된 정보와 함께 아래 정보들을 추가로 보여주어야 합니다.
  - [ ] 비디오 상세 설명
  - [ ] 비디오 영상 (재생 가능해야 합니다.)
- [ ] Modal의 바깥 부분 혹은 닫는 버튼을 누를시, 모달은 사라져야 합니다.

### Advanced

- [ ] React Component Test 작성하기 (with Jest, Enzyme etc)
- [ ] Utility 함수가 있다면, 그에 대한 Test Code 작성하기
- [ ] Integration Test 작성하기 (with Protractor or Nightwatch etc)
