/**
 * Collaboration hook — placeholder / stub implementation
 *
 * Future integration plan:
 * ─────────────────────────────────────────────────────────
 * 1. Install Yjs and HocusPocus provider:
 *      npm install yjs @hocuspocus/provider
 *
 * 2. Create a Yjs document and bind it to the canvas store:
 *      const ydoc = new Y.Doc();
 *      const yBlocks = ydoc.getMap('blocks');
 *
 * 3. Connect via HocusPocus WebSocket provider:
 *      const provider = new HocuspocusProvider({
 *        url: 'wss://collab.example.com',
 *        name: `resume-${resumeId}`,
 *        document: ydoc,
 *      });
 *
 * 4. Sync awareness (cursor positions, user info):
 *      provider.awareness.setLocalStateField('user', {
 *        name: currentUser.name,
 *        color: randomColor(),
 *      });
 *
 * 5. Listen for remote changes and apply to zustand store:
 *      yBlocks.observe((event) => {
 *        // Reconcile Yjs state with canvas.store blocks
 *      });
 *
 * 6. Broadcast local store changes to Yjs doc:
 *      useCanvasStore.subscribe((state, prevState) => {
 *        // Diff blocks and apply to yBlocks map
 *      });
 * ─────────────────────────────────────────────────────────
 */

export interface Collaborator {
  id: string;
  name: string;
  color: string;
  cursor?: { x: number; y: number };
}

export interface UseCollaborationReturn {
  isConnected: boolean;
  collaborators: Collaborator[];
  connect: (roomId: string) => void;
  disconnect: () => void;
}

/**
 * Stub hook for real-time collaboration.
 * Returns a disconnected state with empty collaborator list.
 * Replace with Yjs/HocusPocus integration when ready.
 */
export function useCollaboration(): UseCollaborationReturn {
  return {
    isConnected: false,
    collaborators: [],
    connect: (_roomId: string) => {
      // TODO: Initialize Yjs doc, connect HocusPocus provider
      console.info('[Collaboration] connect() called — not yet implemented. Room:', _roomId);
    },
    disconnect: () => {
      // TODO: Destroy provider, clean up Yjs doc
      console.info('[Collaboration] disconnect() called — not yet implemented');
    },
  };
}
