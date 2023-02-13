import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <p></p>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <a href="https://twitter.com/hiroshima_pref">
              <IconBrandTwitter size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a href="https://www.youtube.com/user/hiroshimakenkouhou/">
              <IconBrandYoutube size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a href="https://www.instagram.com/hiroshima_jpn/">
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
