module.exports = {
  authentication: {
    discord: {
      token: ''
    },
    pastebin: { // WILL HAVE TO THINK ABOUT THIS.
      token: ''
    }
  },
  archiving: {
    GUILDS: [], // Guild ids. Use 'ALL' for all.
    DIRECTMESSAGES: [], // User ids. Use 'ALL' for all.
    tempDir: __dirname, // Put temp directory here. (__dirname)
    archiveDir: __dirname, // Put archive directory here. (__dirname)
    auto: {
      enabled: true,
      cronSchedule: '0 0 */1 * *' // This example cron schedule ('0 0 */1 * *') will run archiver every midnight (00:00).
    },
    overrule: false, // Use this to overrule all available custom guild archive options with the one below.
    defaultOptions: {
      everyMessages: 100000, // Create new file every X messages.
      channels: {
        id: true,
        name: true,
        topic: true
      },
      messages: {
        id: true,
        attachments: true,
        embeds: true,
        reactions: true
      },
      members: {
        name: true,
        id: true,
        creationDate: true,
        joinDate: true,
        roles: true,
        icon: true
      },
      guilds: {
        id: true,
        name: true,
        icon: true,
        owner: true,
        emojis: true,
        roles: true,
        channels: true,
        users: true
      },
      downloads: {
        icons: true,
        images: true,
        emojis: true,
        videos: true,
        soundFiles: true,
        textFiles: true,
        misc: true
      },
      trackAndArchiveDeletedMessages: true, // Only works when auto is enabled.
      output: {
        appendWhoArchived: true,
        formatted: false,
        whiteSpace: 2
      }
    }
  },
  debug: true
}
