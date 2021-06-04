#include "Engine.h"
#include <stdlib.h>
#include <memory.h>

#include <chrono>
//
//  You are free to modify this file
//

//  is_key_pressed(int button_vk_code) - check if a key is pressed,
//                                       use keycodes (VK_SPACE, VK_RIGHT, VK_LEFT, VK_UP, VK_DOWN, 'A', 'B')
//
//  get_cursor_x(), get_cursor_y() - get mouse cursor position
//  is_mouse_button_pressed(int button) - check if mouse button is pressed (0 - left button, 1 - right button)
//  clear_buffer() - set all pixels in buffer to 'black'
//  is_window_active() - returns true if window is active
//  schedule_quit_game() - quit game after act()


void drawRect(int x, int y, uint32_t col);
void drawWall();
void drawField();

int processHit(int b);

int field[100][70] = { 0 };

uint32_t colWhite=16777215;
uint32_t colRed=16711680;
uint32_t colGreen=65280;
uint32_t colBlue=255;

int ballDir = 0; // 1 - leftup, 2 - rightup, 3 - rightdown, 4 - leftdown
int checkDir = 1;

unsigned __int64 now=0.0;

// initialize game data in this function
void initialize()
{
//#define SCREEN_WIDTH 1024
//#define SCREEN_HEIGHT 768
    clear_buffer();
    for (int x = 0; x < 100; x++) {
        for (int y = 0; y < 70; y++) {
            field[x][y] = 0;
        }
    }
    ballDir = 0;

    // racket - 1 in field
    field[48][68] = 1;
    field[49][68] = 1;
    field[50][68] = 1;
    field[51][68] = 1;
    field[52][68] = 1;

    field[50][67] = 2; // ball

    int c = 0;
    for (int i = 0; i < 24; i++) {
        for (int j = 0; j < 5; j++) {
            field[1 + i * 4][1 + j * 2] = 3 + c;
            field[2 + i * 4][1 + j * 2] = 3 + c;
            field[3 + i * 4][1 + j * 2] = 3 + c;
            c++;
        }
    }




    drawField();

}

// this function is called to update game data,
// dt - time elapsed since the previous update (in seconds)
void act(float dt)
{
    if (is_key_pressed(VK_ESCAPE))
        schedule_quit_game();

    unsigned __int64 now2= std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count();
    if (now2 - now < 30) return;

    if (is_key_pressed(VK_SPACE)) {
        now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count();

        if (ballDir == 0) ballDir = rand() % 2 + 1;
    }

    if (is_key_pressed(VK_RIGHT)) {
        now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count();
      for (int x = 0; x < 100; x++) {
          if (field[x][68] == 1) { // racket
              // x - racket left, racket length - 5
              if (x < 95) {
                  field[x][68] = 0;
                  field[x+5][68] = 1;
                  break;
              }
          }
      }
      if (ballDir == 0) ballDir = 2;
    }
    if (is_key_pressed(VK_LEFT)) {
        now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count();
      for (int x = 0; x < 100; x++) {
          if (field[x][68] == 1) { // racket
              // x - racket left, racket length - 5
              if (x > 0) {
                  field[x+4][68] = 0;
                  field[x-1][68] = 1;
                  break;
              }
          }
      }
      if (ballDir == 0) ballDir = 1;
    }


        now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count();
        // 1 - leftup, 2 - rightup, 3 - rightdown, 4 - leftdown
        if (ballDir != 0) {

            int gameStatus = 1;

            for (int x = 0; x < 100; x++) {
                for (int y = 0; y < 70; y++) {
                    if (field[x][y] == 2) { // ball
                        if (ballDir == 1) { // leftup
                            if (checkDir == 1) {
                                if (x == 1 && y != 1) { ballDir = 2; checkDir = 0; }
                                if (x != 1 && y == 1) { ballDir = 4; checkDir = 0; }
                                if (x == 1 && y == 1) { ballDir = 3; checkDir = 0; }
                                if (field[x - 1][y - 1] > 2) { ballDir = 4; checkDir = 0; gameStatus = processHit(field[x - 1][y - 1]); } // brick
                            }
                            if (ballDir == 1) { field[x][y] = 0; field[x - 1][y - 1] = 2; checkDir = 1; }
                            else { checkDir = 0; }
                        }
                        else if (ballDir == 2) { // rightup
                            if (checkDir == 1) {
                                if (x == 99 && y != 1) { ballDir = 1; checkDir = 0; }
                                if (x != 99 && y == 1) { ballDir = 3; checkDir = 0; }
                                if (x == 99 && y == 1) { ballDir = 4; checkDir = 0; }
                                if (field[x + 1][y - 1] > 2) { ballDir = 3; checkDir = 0; gameStatus = processHit(field[x + 1][y - 1]); } // brick
                            }
                            if (ballDir == 2) { field[x][y] = 0; field[x + 1][y - 1] = 2; checkDir = 1; }
                            else { checkDir = 0; }
                        }
                        else if (ballDir == 3) { // rightdown
                            if (checkDir == 1) {
                                if (x == 99 && y != 69) { ballDir = 4; checkDir = 0; }
                                if (x != 99 && y == 69) { ballDir = 2; checkDir = 0; gameStatus = 0; }
                                if (x == 99 && y == 69) { ballDir = 1; checkDir = 0; gameStatus = 0; }
                                if (field[x + 1][y + 1] > 2) { ballDir = 1; checkDir = 0; gameStatus = processHit(field[x + 1][y + 1]); } // brick
                                if (field[x + 1][y + 1] == 1) { ballDir = 2; checkDir = 0; } // racket
                            }
                            if (ballDir == 3) { field[x][y] = 0; field[x + 1][y + 1] = 2; checkDir = 1; }
                            else { checkDir = 0; }
                        }
                        else if (ballDir == 4) { // leftdown
                            if (checkDir == 1) {
                                if (x == 1 && y != 69) { ballDir = 3; checkDir = 0; }
                                if (x != 1 && y == 69) { ballDir = 1; checkDir = 0; gameStatus = 0; }
                                if (x == 1 && y == 69) { ballDir = 2; checkDir = 0; gameStatus = 0; }
                                if (field[x - 1][y + 1] > 2) { ballDir = 2; checkDir = 0; gameStatus = processHit(field[x - 1][y + 1]); } // brick
                                if (field[x - 1][y + 1] == 1) { ballDir = 1; checkDir = 0; } // racket
                            }
                            if (ballDir == 4) { field[x][y] = 0;field[x - 1][y + 1] = 2; checkDir = 1; }
                            else { checkDir = 0; }
                        }

                        if (gameStatus == 0 || gameStatus == 2) initialize();

                        drawField();
                        return;
                    }
                }
            }
        }
        drawField();
}



// this function processes hit and returns status

int processHit(int b)
{
    int status = 2;
    for (int x = 0; x < 100; x++) {
        for (int y = 0; y < 70; y++) {
            if (field[x][y] == b) { field[x][y] = 0; } 
            if (field[x][y] != b && field[x][y] > 2) { status = 1; }

        }
    }
    return status;

}


// this function draws 10x10 square

void drawRect(int x, int y, uint32_t col)
{
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            buffer[y*10 + 34 + i][x*10 + 12 + j] = col;
        }
    }

}


// this function draws data that in field array

void drawField()
{
    clear_buffer();
    drawWall();

    for (int x = 0; x < 100; x++) {
        for (int y = 0; y < 70; y++) {
            if (field[x][y] == 1) {drawRect(x, y, colWhite);} // racket
            if (field[x][y] == 2) { drawRect(x, y, colGreen); } // ball
            if (field[x][y] > 2) { drawRect(x, y, colWhite); } // brick

        }
    }
}



// this function draws wall where game plays
void drawWall()
{
    for (int x = 0; x < 1002; x++) {
         buffer[33][x+11] = colWhite;
         buffer[734][x+11] = colWhite;
    }
    for (int y = 0; y < 702; y++) {
        buffer[33+y][11] = colWhite;
        buffer[33+y][1012] = colWhite;
    }

}


// fill buffer in this function
// uint32_t buffer[SCREEN_HEIGHT][SCREEN_WIDTH] - is an array of 32-bit colors (8 bits per R, G, B)
void draw()
{
  // clear backbuffer
  //    memset(buffer, 0, SCREEN_HEIGHT * SCREEN_WIDTH * sizeof(uint32_t));


}





// free game data in this function
void finalize()
{
}

