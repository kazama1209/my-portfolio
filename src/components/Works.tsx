import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Works
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <List className={classes.root}>
            <ListItem>
              <ListItemLink href='https://github.com/kazama1209/ramen-quest'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Ramen Quest' secondary='就活用に作ったラーメンのレビューサイト。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/kazama1209/slack-bot'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Slack Bot' secondary='趣味で作った天気予報や株価情報などを教えてくれるSlackBot。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/kazama1209/periodic-slack-bot-on-aws-lambda'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Periodic Lamda' secondary='AWS Lambdaの定期実行用スクリプト。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/kazama1209/my-portfolio'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='My Portfolio' secondary='Takashiro Kazamaのポートフォリオサイト。' />
              </ListItemLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;
