import { Button, Drawer } from '@blueprintjs/core'

import { FC, useState } from 'react'

import { CharaUploader } from 'components/uploader/CharaUploader'

export const CharaUploaderLaunch: FC = () => {
  const [uploaderActive, setUploaderActive] = useState(false)

  return (
    <>
      <Drawer
        size="560px"
        isOpen={uploaderActive}
        onClose={() => setUploaderActive(false)}
      >
        <CharaUploader />
      </Drawer>

      <Button
        large
        fill
        icon="cloud-upload"
        onClick={() => setUploaderActive(true)}
      >
        上传已有干员数据
      </Button>
    </>
  )
}
