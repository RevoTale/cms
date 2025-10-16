import { BoldItalicUnderlineToggles, ChangeCodeMirrorLanguage, CodeToggle, ConditionalContents, CreateLink, DiffSourceToggleWrapper, HighlightToggle, InsertCodeBlock, InsertImage, InsertTable, InsertThematicBreak, ListsToggle, Separator, ShowSandpackInfo, StrikeThroughSupSubToggles, UndoRedo } from '@mdxeditor/editor'
import React from 'react'



/**
 * A toolbar component that includes all toolbar components.
 * Notice that some of the buttons will work only if you have the corresponding plugin enabled, so you should use it only for testing purposes.
 * You'll probably want to create your own toolbar component that includes only the buttons that you need.
 * @group Toolbar Components
 */
export const KitchenSinkToolbar: React.FC = () => {
  return (
    <DiffSourceToggleWrapper>
      <ConditionalContents
        options={[
          { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
          { when: (editor) => editor?.editorType === 'sandpack', contents: () => <ShowSandpackInfo /> },
          {
            fallback: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <HighlightToggle />
                <Separator />
                <StrikeThroughSupSubToggles />
                <Separator />
                <ListsToggle />
                <Separator />

          
                <Separator />

                <CreateLink />
                <InsertImage />

                <Separator />

                <InsertTable />
                <InsertThematicBreak />

                <Separator />
                <InsertCodeBlock  />

         

                <Separator />
              </>
            )
          }
        ]}
      />
    </DiffSourceToggleWrapper>
  )
}