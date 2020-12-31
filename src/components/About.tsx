import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            <p>早稲田大学商学部 → 個人事業主 → Webエンジニア</p>
            <p>大学生時代に趣味で始めたアフィリエイト・投資（FX、株、仮想通貨）が成功。</p>
            <p>そのままの流れで就職活動などはせず、卒業後は個人事業主として数年間働いていました。</p>
            <p>しかし、世のトレンドの移り変わり（Googleアップデート）もあり2018年頃から業績が悪化。</p>
            <p>その場しのぎの手段にすがる事の危険性を痛感し、手に職つけようとWebエンジニアに転身しました。</p>
            <p>開発経験が浅く、毎日わからない事だらけですが、持ち前の努力で何とかしがみついています。</p>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
