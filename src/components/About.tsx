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
            早稲田大学商学部 → 個人事業主 → Webエンジニア（UUUM株式会社）
            <br />
            <br />
            大学生時代に趣味で始めたアフィリエイト・投資（FX、株、仮想通貨）が運良く成功。
            <br />
            <br />
            そのままの流れで就職活動などは一切せず、起業して個人事業主として働いていました。
            <br />
            <br />
            しかし、世のトレンドの移り変わり（Googleアップデート）もあり2018年頃から業績が悪化…。
            <br />
            <br />
            流動的すぎる手段にすがる事の危険性を痛感し、手に職つけようとWebエンジニアに転身しました。
            <br />
            <br />
            今現在はUUUM株式会社に在籍中。
            <br />
            <br />
            開発経験が浅く、毎日わからない事だらけですが、前向きに何とかしがみついています。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
